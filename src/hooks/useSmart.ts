import { useCallback, useEffect, useState } from "react";

import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { Chains } from "../web3/constants";
import {
  IMarketplaceSmart,
  testnetMarketplaceSmart,
} from "../web3/smart-contracts/marketplace";
import {
  IRealEstateSmart,
  testnetRealEstateSmart,
} from "../web3/smart-contracts/real-estate";
import { INftSmart, testnetNftSmart } from "../web3/smart-contracts/nft";

export const useSmarts = () => {
  const [smarts, setSmarts] = useState<{
    marketplace: IMarketplaceSmart;
    realEstate: IRealEstateSmart;
    nft: INftSmart;
  } | null>(null);
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const handleGetSmarts = useCallback(() => {
    switch (chainId) {
      case Chains.Mainnet:
        return {
          realEstate: testnetRealEstateSmart, // если потребуется для Mainnet
          marketplace: testnetMarketplaceSmart,
          nft: testnetNftSmart,
          // usdt: mainnetUsdtSmart,
        };
      case Chains.Testnet:
        return {
          realEstate: testnetRealEstateSmart, // Исправлено
          marketplace: testnetMarketplaceSmart,
          nft: testnetNftSmart,
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

      await smarts.realEstate.init(walletProvider, address); // Исправлено
      await smarts.marketplace.init(walletProvider, address);
      await smarts.nft.init(walletProvider, address);
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
