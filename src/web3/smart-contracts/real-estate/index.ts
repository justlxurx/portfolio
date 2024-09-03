import { RealEstateSmart } from "./RealEstateSmart.ts";
import TestnetRealEstateAbi from "./TestnetRealEstateAbi.json";
// import MainnetRealEstateAbi from "./MainnetRealEstateAbi.json";
import { Interface, InterfaceAbi } from "ethers";
import { ethereumRpcUrls } from "../constants.ts";

interface CreateRealEstateSmartOptions {
  realEstateAddress: string;
  abi: Interface | InterfaceAbi;
  rpcUrl: string;
}

function createRealEstateSmart({
  realEstateAddress,
  abi,
  rpcUrl,
}: CreateRealEstateSmartOptions) {
  const realEstateSmart = new RealEstateSmart(realEstateAddress, abi, rpcUrl);
  return realEstateSmart;
}

export const testnetRealEstateSmart = createRealEstateSmart({
  realEstateAddress: import.meta.env.VITE_TEST_REAL_ESTATE_ADDRESS!,
  abi: TestnetRealEstateAbi,
  rpcUrl: ethereumRpcUrls.testnet,
});
// export const mainnetDoggySmart = createDoggySmart({
//   realEstateAddress: import.meta.env.VITE_MAIN_REAL_ESTATE_ADDRESS!,
//   abi: MainnetRealEstateAbi,
//   rpcUrl: ethereumRpcUrls.mainnet,
// });
export * from "./interface";
