import {
  Eip1193Provider,
  formatUnits,
  Interface,
  InterfaceAbi,
  parseUnits,
} from "ethers";
import { INftSmart } from "./interface";
import { Smart } from "../interface";

export class NftSmart implements INftSmart {
  SMART_ADDRESS: string;
  ABI: Interface | InterfaceAbi;
  smart: Smart;
  USER_ADDRESS?: string;

  constructor(
    smartAddress: string,
    abi: Interface | InterfaceAbi,
    rpcUrl: string
  ) {
    this.SMART_ADDRESS = smartAddress;
    this.ABI = abi;
    this.smart = new Smart(this.SMART_ADDRESS, this.ABI, rpcUrl);
  }

  async init(walletProvider: Eip1193Provider, address: string) {
    await this.smart.init(walletProvider);
    this.USER_ADDRESS = address;
  }

  guardProperty() {
    const { USER_ADDRESS } = this;
    if (!USER_ADDRESS) throw new Error("User address is undefined");
    return { USER_ADDRESS };
  }

  // Read contracts

  async Calculate(): Promise<string> {
    const calculate = await this.smart.callStaticReadMethod<string>(
      "Calculate"
    );
    return calculate;
  }
  async balanceOf(account: string, id: string): Promise<string> {
    const balanceOf = await this.smart.callStaticReadMethod<string>(
      "balanceOf",
      account,
      id
    );
    return balanceOf;
  }

  async balanceOfBatch(accounts: [], ids: []): Promise<string> {
    const balanceOfBatch = await this.smart.callStaticReadMethod<string>(
      "balanceOfBatch",
      accounts,
      ids
    );
    return balanceOfBatch;
  }

  async exists(id: string): Promise<boolean> {
    const exists = await this.smart.callStaticReadMethod<boolean>("exists", id);
    return exists;
  }

  async isApprovedForAll(account: string, operator: string): Promise<boolean> {
    const isApprovedForAll = await this.smart.callStaticReadMethod<boolean>(
      "isApprovedForAll",
      account,
      operator
    );
    return isApprovedForAll;
  }

  async owner(): Promise<string> {
    const owner = await this.smart.callStaticReadMethod<string>("owner");
    return owner;
  }

  async supportsInterface(interfaceId: string): Promise<boolean> {
    const supportsInterface = await this.smart.callStaticReadMethod<boolean>(
      "supportsInterface",
      interfaceId
    );
    return supportsInterface;
  }

  async totalBalanceOf(input1: string, input2: string): Promise<string> {
    const totalBalanceOf = await this.smart.callStaticReadMethod<string>(
      "totalBalanceOf",
      input1,
      input2
    );
    return totalBalanceOf;
  }

  async totalHolders(input: string): Promise<string> {
    const totalHolders = await this.smart.callStaticReadMethod<string>(
      "totalHolders",
      input
    );
    return totalHolders;
  }

  async totalSupply(): Promise<string> {
    const totalSupply = await this.smart.callStaticReadMethod<string>(
      "totalSupply"
    );
    return totalSupply;
  }

  async uri(input: string): Promise<string> {
    const uri = await this.smart.callStaticReadMethod<string>("uri", input);
    return uri;
  }

  // Write contracts

  async burn(account: string, id: string, value: string): Promise<void> {
    const tx = await this.smart.callMethod("burn", account, id, value);
    await tx.wait();
  }

  async burnBatch(account: string, ids: [], values: []): Promise<void> {
    const tx = await this.smart.callMethod("burnBatch", account, ids, values);
    await tx.wait();
  }

  async mint(
    account: string,
    id: string,
    amount: string,
    data: string,
    newuri: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "mint",
      account,
      id,
      amount,
      data,
      newuri
    );
    await tx.wait();
  }

  async mintBatch(
    to: string,
    ids: [],
    amounts: [],
    data: string,
    newuri: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "mintBarch",
      to,
      ids,
      amounts,
      data,
      newuri
    );
    await tx.wait();
  }

  async safeBatchTransferFrom(
    from: string,
    to: string,
    ids: [],
    values: [],
    data: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "safeBatchTransferFrom",
      from,
      to,
      ids,
      values,
      data
    );
    await tx.wait();
  }

  async safeTransferFrom(
    from: string,
    to: string,
    id: string,
    value: string,
    data: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "safeTransferFrom",
      from,
      to,
      id,
      value,
      data
    );
    await tx.wait();
  }

  async setApprovalForAll(operator: string, approved: boolean): Promise<void> {
    const tx = await this.smart.callMethod(
      "setApprovalForAll",
      operator,
      approved
    );
    await tx.wait();
  }

  async renounceOwnership(): Promise<void> {
    const tx = await this.smart.callMethod("renounceOwnership");
    await tx.wait();
  }

  async transferOwnership(newOwner: string): Promise<void> {
    const tx = await this.smart.callMethod("transferOwnership", newOwner);
    await tx.wait();
  }
}
