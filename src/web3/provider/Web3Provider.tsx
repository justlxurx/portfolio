import { createWeb3Modal } from "@web3modal/ethers/react";
import {
  ethersConfig,
  chains,
  projectId,
  featuredWalletIds,
} from "../config.ts";
import React, { PropsWithChildren } from "react";

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeVariables: {
    "--w3m-border-radius-master": "1px",
    "--w3m-font-family": "Patsy Sans",
    "--w3m-accent": "#FF720E",
    // '--w3m-font-size-master': '18px',
    // '--w3m-color-mix': '#FF720E',
    // '--w3m-color-mix-strength': 20
  },
  defaultChain: chains[0],
  //   featuredWalletIds,
});

const Web3Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Web3Provider;
