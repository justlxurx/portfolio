// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import { ethers } from "ethers";
// import { useCallback, useEffect } from "react";
// // import {formatDate} from "../utils/formatDate.ts";
// import { authorizeAPI } from "../api/authorize.ts";
// import { parseJwt } from "../utils/parseJwt.ts";
// import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
// import { authSelect, setAuth, setInitialAuth } from "../slice/authSlice.ts";

// const Processes = () => {
//   const { address, isConnected } = useWeb3ModalAccount();
//   const { walletProvider } = useWeb3ModalProvider();
//   const dispatch = useAppDispatch();
//   const auth = useAppSelector(authSelect);

//   const signMessage = useCallback(
//     async (message: string) => {
//       try {
//         const provider = new ethers.BrowserProvider(walletProvider!);
//         const signer = await provider.getSigner();
//         const signature = await signer.signMessage(message);

//         return signature;
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     [walletProvider]
//   );

//   const authorize = useCallback(async () => {
//     // const currentDate = formatDate(new Date());
//     const message = `I am signing into estate.hotcode.kz`; //on ${currentDate}
//     const signature = await signMessage(message);

//     if (address && signature) {
//       try {
//         const authorizationRes = await authorizeAPI.authorize({
//           address,
//         //   message,
//           signature,
//         });

//         if (authorizationRes.token) {
//           dispatch(
//             setAuth({
//               token: authorizationRes.token,
//               exp: parseJwt(authorizationRes.token).exp * 1000,
//             })
//           );
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }, [address, signMessage]);

//   useEffect(() => {
//     if (isConnected && !auth.isAuthorized) {
//       authorize()
//         .then(() => {
//           console.log("Successfully authorized");
//         })
//         .catch(console.error);
//     }
//   }, [isConnected, address, authorize, auth]);

//   useEffect(() => {
//     if (!isConnected) {
//       dispatch(setInitialAuth());
//     }
//   }, [isConnected]);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;

//     if (auth.isAuthorized) {
//       const time = auth.exp - Date.now();

//       console.log("timeout time", time);

//       timeout = setTimeout(() => {
//         authorize()
//           .then(() => {
//             console.log("Successfully re-authorized");
//           })
//           .catch(console.error);
//       }, time);
//     }

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [auth, auth]);

//   return null;
// };

// export default Processes;

///////second one
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { authorizeAPI } from "../api/authorize.ts";
import { parseJwt } from "../utils/parseJwt.ts";
import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
import { authSelect, setAuth, setInitialAuth } from "../slice/authSlice.ts";

export const useProcesses = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelect);
  const [nonce, setNonce] = useState<string | null>(null);

  const fetchNonce = useCallback(async () => {
    if (address) {
      try {
        const fetchedNonce = await authorizeAPI.getNonce(address);
        setNonce(fetchedNonce);
      } catch (err) {
        console.error("Failed to fetch nonce:", err);
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

  const handleRegister = useCallback(async () => {
    try {
      const result = await authorizeAPI.register({
        wallet_address: address,
        username: "",
        first_name: "",
        last_name: "",
      });
      return result;
    } catch (err) {
      console.error("Registration failed:", err);
      throw err;
    }
  }, [address]);

  const authorize = useCallback(async () => {
    if (nonce) {
      const message = `I am signing into estate.hotcode.kz using nonce: ${nonce}`;
      const signature = await signMessage(message);
      if (address && signature) {
        try {
          const token = await authorizeAPI.authorize({ address, signature });
          if (token) {
            dispatch(
              setAuth({
                token,
                exp: parseJwt(token).exp * 1000,
              })
            );
          }
        } catch (err) {
          console.error("Authorization failed:", err);
          await handleRegister();
        }
      }
    }
  }, [address, nonce, signMessage, dispatch, handleRegister]);

  const processAuth = useCallback(async () => {
    if (isConnected && !auth.isAuthorized) {
      await fetchNonce();
      await authorize();
    } else if (!isConnected) {
      dispatch(setInitialAuth());
    }
  }, [isConnected, auth.isAuthorized, fetchNonce, authorize, dispatch]);

  return { processAuth };
};
