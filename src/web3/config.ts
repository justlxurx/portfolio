import { defaultConfig } from "@web3modal/ethers/react";
import { Chains } from "./constants";

// 1. Get projectId
const projectId = import.meta.env.VITE_WALLET_CONNECT_ID as string;

// 2. Set chains
const chains = [
  // {
  //   chainId: Chains.Mainnet,
  //   name: "Polygon Mainnet",
  //   currency: "POL",
  //   explorerUrl: "https://polygonscan.com/",
  //   rpcUrl: "https://endpoints.omniatech.io/v1/matic/mainnet/public",
  // },
  {
    chainId: Chains.Testnet,
    name: "Amoy",
    currency: "MATIC",
    explorerUrl: "https://explorer.public.zkevm-test.net",
    rpcUrl: "https://polygon-amoy.drpc.org",
  },
  // {
  //   chainId: Chains.Testnet,
  //   name: "Sepolia Test Network",
  //   currency: "ETH",
  //   explorerUrl: "https://sepolia.etherscan.io/",
  //   rpcUrl: "https://ethereum-sepolia-rpc.publicnode.com",
  // },
];

// 3. Create a metadata object
const metadata = {
  name: "Real Estate",
  description: "This is a Real Estate",
  url: "", // origin must match your domain & subdomain
  icons: [""],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: Chains.Mainnet, // used for the Coinbase SDK
});

const featuredWalletIds = [
  "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
];

export { projectId, chains, ethersConfig, featuredWalletIds };
