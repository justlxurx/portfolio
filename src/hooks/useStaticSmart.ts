import { useCallback, useEffect, useState } from "react";

import {
  IRealEstateSmart,
  testnetRealEstateSmart,
} from "../web3/smart-contracts/real-estate";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Chains } from "../web3/constants.ts";

// Be careful, use only for read methods, otherwise error will be thrown
export const useStaticSmarts = () => {
  const [smarts, setSmarts] = useState<{ realEstate: IRealEstateSmart }>({
    realEstate: testnetRealEstateSmart,
    // usdt: mainnetUsdtSmart,
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
        };
      default:
        return {
          realEstate: testnetRealEstateSmart,
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
