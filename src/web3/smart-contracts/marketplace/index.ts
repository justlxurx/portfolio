import { MarketplaceSmart } from "./MarketplaceSmart.ts";
import TestnetMarketplaceAbi from "./TestnetMarketplaceAbi.json";
// import MainnetRealEstateAbi from "./MainnetRealEstateAbi.json";
import { Interface, InterfaceAbi } from "ethers";
import { ethereumRpcUrls } from "../constants.ts";

interface CreateMarketplaceSmartOptions {
  marketplaceAddress: string;
  abi: Interface | InterfaceAbi;
  rpcUrl: string;
}

function createMarketplaceSmart({
  marketplaceAddress,
  abi,
  rpcUrl,
}: CreateMarketplaceSmartOptions) {
  const realEstateSmart = new MarketplaceSmart(marketplaceAddress, abi, rpcUrl);
  return realEstateSmart;
}

export const testnetMarketplaceSmart = createMarketplaceSmart({
  marketplaceAddress: import.meta.env.VITE_TEST_MARKETPLACE_ADDRESS!,
  abi: TestnetMarketplaceAbi,
  rpcUrl: ethereumRpcUrls.testnet,
});
// export const mainnetDoggySmart = createDoggySmart({
//   realEstateAddress: import.meta.env.VITE_MAIN_REAL_ESTATE_ADDRESS!,
//   abi: MainnetRealEstateAbi,
//   rpcUrl: ethereumRpcUrls.mainnet,
// });
export * from "./interface";
