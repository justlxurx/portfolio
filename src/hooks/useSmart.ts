import { useCallback, useEffect, useState } from "react";

import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { Chains } from "../web3/constants";
// import {
//   IUsdtSmart,
//   mainnetUsdtSmart,
//   testnetUsdtSmart,
// } from "../web3/smart-contracts/usdt";
import {
  IRealEstateSmart,
  testnetRealEstateSmart,
} from "../web3/smart-contracts/real-estate";

export const useSmarts = () => {
  const [smarts, setSmarts] = useState<{
    // usdt: IUsdtSmart;
    realEstate: IRealEstateSmart;
  } | null>(null);
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const handleGetSmarts = useCallback(() => {
    switch (chainId) {
      case Chains.Mainnet:
        return {
          realEstate: testnetRealEstateSmart, // если потребуется для Mainnet
          // usdt: mainnetUsdtSmart,
        };
      case Chains.Testnet:
        return {
          realEstate: testnetRealEstateSmart, // Исправлено
          // usdt: testnetUsdtSmart,
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

      // await smarts.usdt.init(walletProvider, address);
      await smarts.realEstate.init(walletProvider, address); // Исправлено
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

// import { useCallback, useEffect, useState } from "react";

// import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
// import {Chains} from "../web3/constants.ts";
// import {ISaleSmart, mainnetSaleSmart, testnetSaleSmart} from "../web3/smart-contracts/sale";
// import {IStakeSmart, mainnetStakeSmart, testnetStakeSmart} from "../web3/smart-contracts/stake";
// import {IDoggySmart, mainnetDoggySmart, testnetDoggySmart} from "../web3/smart-contracts/doggy";
// import {IUsdtSmart, mainnetUsdtSmart, testnetUsdtSmart} from "../web3/smart-contracts/usdt";

// export const useSmarts = () => {
//     const [smarts, setSmarts] = useState<{ sale: ISaleSmart, usdt: IUsdtSmart, stake: IStakeSmart, doggy: IDoggySmart } | null>(null);
//     const { walletProvider } = useWeb3ModalProvider();
//     const { address, chainId, isConnected } = useWeb3ModalAccount();

//     const handleGetSmarts = useCallback(() => {
//         switch (chainId) {
//             case Chains.Mainnet:
//                 return {
//                     sale: mainnetSaleSmart,
//                     usdt: mainnetUsdtSmart,
//                     stake: mainnetStakeSmart,
//                     doggy: mainnetDoggySmart
//                 }
//             case Chains.Testnet:
//                 return {
//                     sale: testnetSaleSmart,
//                     usdt: testnetUsdtSmart,
//                     stake: testnetStakeSmart,
//                     doggy: testnetDoggySmart
//                 }
//             default:
//                 return null
//         }
//     }, [chainId])

//     const initSmarts = useCallback(async () => {
//         try {
//             if (!isConnected || !walletProvider || !address) return;

//             const smarts = handleGetSmarts()

//             if(!smarts) return;

//             await smarts.sale.init(walletProvider, address)
//             await smarts.usdt.init(walletProvider, address)
//             await smarts.stake.init(walletProvider, address)
//             await smarts.doggy.init(walletProvider, address)
//             setSmarts(smarts)
//         } catch(err) {
//             console.log(err)
//         }
//     }, [isConnected, walletProvider, address, handleGetSmarts])

//     useEffect(() => {
//         initSmarts()
//     }, [initSmarts])

//     return {smarts};
// }
