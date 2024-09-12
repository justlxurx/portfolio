import { Interface, InterfaceAbi } from "ethers";
import { Smart } from "../interface.ts";

export interface INftProperties {
  SMART_ADDRESS: string;
  ABI: Interface | InterfaceAbi;
  smart: Smart;
  USER_ADDRESS?: string;
}

export interface INftSmart extends INftProperties {
  // Read contracts
  Calculate(): Promise<string>;
  balanceOf(account: string, id: string): Promise<string>;
  balanceOfBatch(accounts: [], ids: []): Promise<string>;
  exists(id: string): Promise<boolean>;
  isApprovedForAll(account: string, operator: string): Promise<boolean>;
  owner(): Promise<string>;
  supportsInterface(interfaceId: string): Promise<boolean>;
  totalBalanceOf(input1: string, input2: string): Promise<string>;
  totalHolders(input: string): Promise<string>;
  totalSupply(): Promise<string>;
  totalSupply(id: string): Promise<string>;
  uri(input: string): Promise<string>;

  // Write contracts
  burn(account: string, id: string, value: string): Promise<void>;
  burnBatch(account: string, ids: [], values: []): Promise<void>;
  mint(
    account: string,
    id: string,
    amount: string,
    data: string,
    newuri: string
  ): Promise<void>;
  mintBatch(
    to: string,
    ids: [],
    amounts: [],
    data: string,
    newuri: string
  ): Promise<void>;
  renounceOwnership(): Promise<void>;
  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: [],
    values: [],
    data: string
  ): Promise<void>;
  safeTransferFrom(
    from: string,
    to: string,
    id: string,
    value: string,
    data: string
  ): Promise<void>;
  //   safeTransferFrom(from:string, to:string,id:string,value:string,data:string):Promise<void>;
  setApprovalForAll(operator: string, approved: boolean): Promise<void>;
  transferOwnership(newOwner: string): Promise<void>;
}
