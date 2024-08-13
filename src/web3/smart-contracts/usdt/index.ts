import { UsdtSmart } from "./UsdtSmart";
import TestnetUsdtAbi from "./TestnetUsdtAbi.json";
import MainnetUsdtAbi from "./MainnetUsdtAbi.json";
import { Interface, InterfaceAbi } from "ethers";
import { ethereumRpcUrls } from "../constants";

interface CreateUsdtSmartOptions {
  usdtAddress: string;
  saleAddress: string;
  abi: Interface | InterfaceAbi;
  rpcUrl: string;
}

function createUsdtSmart({
  usdtAddress,
  saleAddress,
  abi,
  rpcUrl,
}: CreateUsdtSmartOptions) {
  const usdtSmart = new UsdtSmart(usdtAddress, saleAddress, abi, rpcUrl);
  return usdtSmart;
}

export const testnetUsdtSmart = createUsdtSmart({
  usdtAddress: import.meta.env.VITE_TEST_USDT_ADDRESS!,
  saleAddress: import.meta.env.VITE_TEST_SALE_ADDRESS!,
  abi: TestnetUsdtAbi.result,
  rpcUrl: ethereumRpcUrls.testnet,
});
export const mainnetUsdtSmart = createUsdtSmart({
  usdtAddress: import.meta.env.VITE_MAIN_USDT_ADDRESS!,
  saleAddress: import.meta.env.VITE_MAIN_SALE_ADDRESS!,
  abi: MainnetUsdtAbi.result,
  rpcUrl: ethereumRpcUrls.mainnet,
});
export * from "./interface";
