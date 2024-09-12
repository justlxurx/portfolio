import { NftSmart } from "./NftSmart.ts";
import TestnetNftAbi from "./TestnetNftAbi.json";
// import MainnetRealEstateAbi from "./MainnetRealEstateAbi.json";
import { Interface, InterfaceAbi } from "ethers";
import { ethereumRpcUrls } from "../constants.ts";

interface CreateNftSmartOptions {
  nftAddress: string;
  abi: Interface | InterfaceAbi;
  rpcUrl: string;
}

function createNftSmart({ nftAddress, abi, rpcUrl }: CreateNftSmartOptions) {
  const nftSmart = new NftSmart(nftAddress, abi, rpcUrl);
  return nftSmart;
}

export const testnetNftSmart = createNftSmart({
  nftAddress: import.meta.env.VITE_TEST_NFT_ADDRESS!,
  abi: TestnetNftAbi,
  rpcUrl: ethereumRpcUrls.testnet,
});
// export const mainnetDoggySmart = createDoggySmart({
//   realEstateAddress: import.meta.env.VITE_MAIN_REAL_ESTATE_ADDRESS!,
//   abi: MainnetRealEstateAbi,
//   rpcUrl: ethereumRpcUrls.mainnet,
// });
export * from "./interface";
