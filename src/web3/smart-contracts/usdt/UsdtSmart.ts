import {
  Eip1193Provider,
  formatUnits,
  Interface,
  InterfaceAbi,
  parseUnits,
} from "ethers";
import { IUsdtSmart } from "./interface";
import { Smart } from "../interface";

export class UsdtSmart implements IUsdtSmart {
  SMART_ADDRESS: string;
  SALE_ADDRESS: string;
  ABI: Interface | InterfaceAbi;
  smart: Smart;
  USER_ADDRESS?: string;

  constructor(
    smartAddress: string,
    saleAddress: string,
    abi: Interface | InterfaceAbi,
    rpcUrl: string
  ) {
    this.SMART_ADDRESS = smartAddress;
    this.SALE_ADDRESS = saleAddress;
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
    return formatUnits(allowance, 6);
  }

  async balanceOf(account: string): Promise<string> {
    const balance = await this.smart.callStaticReadMethod<bigint>(
      "balanceOf",
      account
    );
    return formatUnits(balance, 6);
  }

  async decimals(): Promise<number> {
    const decimals = await this.smart.callStaticReadMethod<number>("decimals");
    return decimals;
  }

  async name(): Promise<string> {
    const name = await this.smart.callStaticReadMethod<string>("name");
    return name;
  }

  // async owner(): Promise<string> {
  //     const owner = await this.smart.callStaticReadMethod<string>('owner');
  //     return owner;
  // }

  async symbol(): Promise<string> {
    const symbol = await this.smart.callStaticReadMethod<string>("symbol");
    return symbol;
  }

  async totalSupply(): Promise<string> {
    const totalSupply = await this.smart.callStaticReadMethod<bigint>(
      "totalSupply"
    );
    return formatUnits(totalSupply, 6);
  }

  // Write contracts
  async approve(spender: string, amount: string): Promise<void> {
    const amountValue = parseUnits(amount, 6);
    const tx = await this.smart.callMethod("approve", spender, amountValue);
    await tx.wait();
  }
}
