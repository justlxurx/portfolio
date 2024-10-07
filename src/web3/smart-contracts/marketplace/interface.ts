import { Interface, InterfaceAbi } from "ethers";
import { Smart } from "../interface.ts";

export interface IMarketplaceProperties {
  SMART_ADDRESS: string;
  ABI: Interface | InterfaceAbi;
  smart: Smart;
  USER_ADDRESS?: string;
}

export interface IMarketplaceSmart extends IMarketplaceProperties {
  // Read contracts
  NFT(): Promise<string>;
  Price(): Promise<number>;
  USDT(): Promise<string>;
  getOffers(): Promise<string>;
  owner(): Promise<string>;
  supportsInterface(interfaceId: string): Promise<boolean>;

  // Write contracts
  buyNFT(
    tokenId: string,
    amountToBuy: string,
    _ownerOfNFT: string
  ): Promise<void>;
  onERC1155BatchReceived(
    address1: string,
    address2: string,
    amount1: string,
    amount2: string,
    bytes: string
  ): Promise<void>;
  onERC1155Received(
    address1: string,
    address2: string,
    amount1: string,
    amount2: string,
    bytes: string
  ): Promise<void>;
  renounceOwnership(): Promise<void>;
  setOffer(
    tokenId: string,
    _price: string,
    _amountToSell: string,
    data: string
  ): Promise<void>;
  transferOwnership(newOwner: string): Promise<void>;
  withdrawNFT(tokenId: string): Promise<void>;
  withdrawUSDT(): Promise<void>;
}
