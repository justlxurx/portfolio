import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { useCallback } from "react";
import { authorizeAPI } from "../api/authorize.ts";
import { parseJwt } from "../utils/parseJwt.ts";
import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
import { authSelect, setAuth, setInitialAuth } from "../slice/authSlice.ts";
import { useEffect, useState } from "react";

export const useProcesses = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelect);

  const fetchNonce = useCallback(async () => {
    if (address) {
      try {
        const fetchedNonce = await authorizeAPI.getNonce(address);
        console.log("fetched nonce " + fetchedNonce);
        if (fetchedNonce) {
          const message = `I am signing into estate.hotcode.kz using nonce: ${fetchedNonce}`;
          const signature = await signMessage(message);

          if (signature && address) {
            try {
              const payload = {
                message: message,
                signature: signature,
                wallet_address: address,
              };
              const res = await authorizeAPI.authorize(payload);
              console.log("response: ");
              console.log(res);
              if (res) {
                dispatch(
                  setAuth({
                    accessToken: res.access_token,
                    refreshToken: res.refresh_token,
                    exp: parseJwt(res.access_token).exp * 1000,
                  })
                );
              }
            } catch (err) {
              console.error("Authorization failed:", err);
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, [address]);

  const signMessage = useCallback(
    async (message: string) => {
      try {
        const provider = new ethers.BrowserProvider(walletProvider!);
        const signer = await provider.getSigner();
        const signature = await signer.signMessage(message);
        return signature;
      } catch (err) {
        console.error("Error signing message:", err);
      }
    },
    [walletProvider]
  );

  const processAuth = useCallback(async () => {
    console.log("isConnected:", isConnected);
    console.log("auth.isAuthorized:", auth.isAuthorized);

    if (isConnected && !auth.isAuthorized) {
      console.log("Starting authorization process...");
      try {
        await fetchNonce();
      } catch (err) {
        console.error("Process authorization failed:", err);
      }
    } else if (!isConnected) {
      console.log("User is not connected, resetting auth state...");
      dispatch(setInitialAuth());
    }
  }, [isConnected, auth.isAuthorized, fetchNonce, dispatch]);

  // useEffect(() => {
  //   if (!isConnected) {
  //     dispatch(setInitialAuth());
  //   }
  // }, [isConnected]);

  useEffect(() => {
    if (isConnected && !auth.isAuthorized) {
      processAuth()
        .then(() => {
          console.log("Successfully authorized");
        })
        .catch(console.error);
    }
  }, [isConnected, address, fetchNonce, auth]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (auth.isAuthorized) {
      const time = auth.exp - Date.now();

      console.log("timeout time", time);

      timeout = setTimeout(() => {
        processAuth()
          .then(() => {
            console.log("Successfully re-authorized");
          })
          .catch(console.error);
      }, time);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [auth, auth]);

  return { processAuth };
};
