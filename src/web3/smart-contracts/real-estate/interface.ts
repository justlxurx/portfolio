import { Interface, InterfaceAbi } from "ethers";
import { Smart } from "../interface.ts";

export interface IRealEstateSmartProperties {
  SMART_ADDRESS: string;
  ABI: Interface | InterfaceAbi;
  smart: Smart;
  USER_ADDRESS?: string;
}

export interface IRealEstateSmart extends IRealEstateSmartProperties {
  // Read contracts
  balanceOf(account: string): Promise<string>;
  getApproved(tokenId: string): Promise<string>;
  isAppovedForAll(owner: string, operator: string): Promise<boolean>;
  name(): Promise<string>;
  owner(): Promise<string>;
  ownerOf(tokenId: string): Promise<string>;
  supportsInterface(interfaceId: string): Promise<boolean>;
  symbol(): Promise<string>;
  tokenURI(tokenId: string): Promise<string>;

  // Write contracts
  _setURI(_newURI: string): Promise<void>;
  approve(to: string, tokenId: string): Promise<void>;
  burn(tokenId: string): Promise<void>;
  mintBatch(to: string, _amount: string): Promise<void>;
  renounceOwnership(): Promise<void>;
  safeMint(to: string): Promise<void>;
  safeTransferFrom(from: string, to: string, tokenId: string): Promise<void>;
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: string,
    data: number
  ): Promise<void>;
  setApprovalForAll(operator: string, approved: boolean): Promise<void>;
  transferFrom(from: string, to: string, tokenId: string): Promise<void>;
  transferOwnership(newOwner: string): Promise<void>;
}
