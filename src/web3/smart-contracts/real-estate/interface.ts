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
  allowance(owner: string, spender: string): Promise<string>;
  balanceOf(account: string): Promise<string>;
  decimals(): Promise<string>;
  name(): Promise<string>;
  owner(): Promise<string>;
  symbol(): Promise<string>;
  totalSupply(): Promise<string>;

  // Write contracts
  approve(spender: string, value: string): Promise<void>;
  mint(to: string, amount: string): Promise<void>;
  renounceOwnership(): Promise<void>;
  transfer(to: string, value: string): Promise<void>;
  transferFrom(from: string, to: string, value: string): Promise<void>;
  transferOwnership(newOwner: string): Promise<void>;
}
