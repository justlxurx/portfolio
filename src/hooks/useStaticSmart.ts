import { useCallback, useEffect, useState } from "react";

import {
  IRealEstateSmart,
  testnetRealEstateSmart,
} from "../web3/smart-contracts/real-estate";
import {
  IMarketplaceSmart,
  testnetMarketplaceSmart,
} from "../web3/smart-contracts/marketplace";
import { INftSmart, testnetNftSmart } from "../web3/smart-contracts/nft";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Chains } from "../web3/constants.ts";

// Be careful, use only for read methods, otherwise error will be thrown
export const useStaticSmarts = () => {
  const [smarts, setSmarts] = useState<{
    realEstate: IRealEstateSmart;
    marketplace: IMarketplaceSmart;
    nft: INftSmart;
  }>({
    realEstate: testnetRealEstateSmart,
    marketplace: testnetMarketplaceSmart,
    nft: testnetNftSmart,
  });
  const { chainId } = useWeb3ModalAccount();

  const handleGetStaticSmarts = useCallback(() => {
    switch (chainId) {
      // case Chains.Mainnet:
      //     return {
      //         realEstate:mainnetRealEstateSmart

      //     }
      case Chains.Testnet:
        return {
          realEstate: testnetRealEstateSmart,
          marketplace: testnetMarketplaceSmart,
          nft: testnetNftSmart,
        };
      default:
        return {
          realEstate: testnetRealEstateSmart,
          marketplace: testnetMarketplaceSmart,
          nft: testnetNftSmart,
        };
    }
  }, [chainId]);

  const initStaticSmarts = useCallback(async () => {
    try {
      const smarts = handleGetStaticSmarts();

      if (!smarts) return;

      setSmarts(smarts);
    } catch (err) {
      console.log(err);
    }
  }, [handleGetStaticSmarts]);

  useEffect(() => {
    initStaticSmarts();
  }, [initStaticSmarts]);

  return { staticSmarts: smarts };
};
