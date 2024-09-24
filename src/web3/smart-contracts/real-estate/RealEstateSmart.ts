import {
  Eip1193Provider,
  formatUnits,
  Interface,
  InterfaceAbi,
  parseUnits,
} from "ethers";
import { IRealEstateSmart } from "./interface";
import { Smart } from "../interface";

export class RealEstateSmart implements IRealEstateSmart {
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
  async allowance(owner: string, spender: string): Promise<string> {
    const allowance = await this.smart.callStaticReadMethod<bigint>(
      "allowance",
      owner,
      spender
    );
    return formatUnits(allowance, 18);
  }
  async balanceOf(account: string): Promise<string> {
    const balance = await this.smart.callStaticReadMethod<bigint>(
      "balanceOf",
      account
    );
    return formatUnits(balance, 18);
  }
  async decimals(): Promise<string> {
    const decimals = await this.smart.callStaticReadMethod<string>("decimals");
    return decimals;
  }
  async name(): Promise<string> {
    const name = await this.smart.callStaticReadMethod<string>("name");
    return name;
  }
  async owner(): Promise<string> {
    const owner = await this.smart.callStaticReadMethod<string>("owner");
    return owner;
  }
  async symbol(): Promise<string> {
    const symbol = await this.smart.callStaticReadMethod<string>("symbol");
    return symbol;
  }
  async totalSupply(): Promise<string> {
    const totalSupply = await this.smart.callStaticReadMethod<string>(
      "totalSupply"
    );
    return totalSupply;
  }

  // Write contracts

  async approve(spender: string, value: string): Promise<void> {
    const amountValue = parseUnits(value, 18);
    const tx = await this.smart.callMethod("approve", spender, amountValue);
    await tx.wait();
  }
  async mint(to: string, amount: string): Promise<void> {
    const tx = await this.smart.callMethod("mint", to, amount);
    await tx.wait();
  }
  async renounceOwnership(): Promise<void> {
    const tx = await this.smart.callMethod("renounceOwnership");
    await tx.wait();
  }
  async transferFrom(from: string, to: string, value: string): Promise<void> {
    const amountValue = parseUnits(value, 18);
    const tx = await this.smart.callMethod(
      "transferFrom",
      from,
      to,
      amountValue
    );
    await tx.wait();
  }
  async transfer(to: string, value: string): Promise<void> {
    const amountValue = parseUnits(value, 18);
    const tx = await this.smart.callMethod("transfer", to, amountValue);
    await tx.wait();
  }
  async transferOwnership(newOwner: string): Promise<void> {
    const tx = await this.smart.callMethod("transferOwnership", newOwner);
    await tx.wait();
  }
}
