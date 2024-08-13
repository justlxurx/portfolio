import { Interface, InterfaceAbi } from "ethers";
import { Smart } from "../interface";

export interface IUsdtSmartProperties {
  SMART_ADDRESS: string;
  SALE_ADDRESS: string;
  ABI: Interface | InterfaceAbi;
  smart: Smart;
  USER_ADDRESS?: string;
}

export interface IUsdtSmart extends IUsdtSmartProperties {
  // Read contracts
  allowance(owner: string, spender: string): Promise<string>;
  balanceOf(account: string): Promise<string>;
  decimals(): Promise<number>;
  name(): Promise<string>;
  symbol(): Promise<string>;
  totalSupply(): Promise<string>;

  // Write contracts
  approve(spender: string, amount: string): Promise<void>;
  // mint(to: string, amount: string): Promise<void>;
  // transfer(to: string, amount: string): Promise<void>;
  // transferFrom(from: string, to: string, amount: string): Promise<void>;
}
