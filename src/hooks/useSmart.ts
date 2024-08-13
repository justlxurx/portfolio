import { useCallback, useEffect, useState } from "react";

import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { Chains } from "../web3/constants";
// import {
//   ISaleSmart,
//   mainnetSaleSmart,
//   testnetSaleSmart,
// } from "../web3/smart-contracts/sale";
// import {
//   IStakeSmart,
//   mainnetStakeSmart,
//   testnetStakeSmart,
// } from "../web3/smart-contracts/stake";
import {
  IUsdtSmart,
  mainnetUsdtSmart,
  testnetUsdtSmart,
} from "../web3/smart-contracts/usdt";

export const useSmarts = () => {
  const [smarts, setSmarts] = useState<{
    // sale: ISaleSmart;
    usdt: IUsdtSmart;
    // stake: IStakeSmart;
  } | null>(null);
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const handleGetSmarts = useCallback(() => {
    switch (chainId) {
      case Chains.Mainnet:
        return {
          // sale: mainnetSaleSmart,
          usdt: mainnetUsdtSmart,
          // stake: mainnetStakeSmart,
        };
      case Chains.Testnet:
        return {
          // sale: testnetSaleSmart,
          usdt: testnetUsdtSmart,
          // stake: testnetStakeSmart,
        };
      default:
        return null;
    }
  }, [chainId]);

  const initSmarts = useCallback(async () => {
    try {
      if (!isConnected || !walletProvider || !address) return;

      const smarts = handleGetSmarts();

      if (!smarts) return;

      // await smarts.sale.init(walletProvider, address);
      await smarts.usdt.init(walletProvider, address);
      // await smarts.stake.init(walletProvider, address);
      setSmarts(smarts);
    } catch (err) {
      console.log(err);
    }
  }, [isConnected, walletProvider, address, handleGetSmarts]);

  useEffect(() => {
    initSmarts();
  }, [initSmarts]);

  return { smarts };
};
