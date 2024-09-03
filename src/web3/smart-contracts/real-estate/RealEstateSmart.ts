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
  async balanceOf(account: string): Promise<string> {
    const balance = await this.smart.callStaticReadMethod<bigint>(
      "balanceOf",
      account
    );
    return formatUnits(balance, 18);
  }
  async getApproved(tokenId: string): Promise<string> {
    const getApproved = await this.smart.callStaticReadMethod<string>(
      "getApproved",
      tokenId
    );
    return getApproved;
    //formatUnits(balance, 18);
  }
  async isAppovedForAll(owner: string, operator: string): Promise<boolean> {
    const isAppovedForAll = await this.smart.callStaticReadMethod<boolean>(
      "isAppovedForAll",
      owner,
      operator
    );
    return isAppovedForAll;
  }
  async name(): Promise<string> {
    const name = await this.smart.callStaticReadMethod<string>("name");
    return name;
  }
  async owner(): Promise<string> {
    const owner = await this.smart.callStaticReadMethod<string>("owner");
    return owner;
  }
  async ownerOf(tokenId: string): Promise<string> {
    const ownerOf = await this.smart.callStaticReadMethod<string>(
      "ownerOf",
      tokenId
    );
    return ownerOf;
  }
  async supportsInterface(interfaceId: string): Promise<boolean> {
    const supportsInterface = await this.smart.callStaticReadMethod<boolean>(
      "upportsInterface",
      interfaceId
    );
    return supportsInterface;
  }
  async symbol(): Promise<string> {
    const symbol = await this.smart.callStaticReadMethod<string>("symbol");
    return symbol;
  }
  async tokenURI(tokenId: string): Promise<string> {
    const supportsInterface = await this.smart.callStaticReadMethod<string>(
      "supportsInterface",
      tokenId
    );
    return supportsInterface;
  }

  // Write contracts
  async _setURI(_newURI: string): Promise<void> {
    const tx = await this.smart.callMethod("_setURI", _newURI);
    await tx.wait();
  }
  async approve(to: string, tokenId: string): Promise<void> {
    const amountValue = parseUnits(tokenId, 18);
    const tx = await this.smart.callMethod("approve", to, amountValue);
    await tx.wait();
  }
  async burn(tokenId: string): Promise<void> {
    const tx = await this.smart.callMethod("burn", tokenId);
    await tx.wait();
  }
  async mintBatch(to: string, _amount: string): Promise<void> {
    const tx = await this.smart.callMethod("mintBatch", to, _amount);
    await tx.wait();
  }
  async renounceOwnership(): Promise<void> {
    const tx = await this.smart.callMethod("renounceOwnership");
    await tx.wait();
  }
  async safeMint(to: string): Promise<void> {
    const tx = await this.smart.callMethod("safeMint", to);
    await tx.wait();
  }
  async safeTransferFrom(
    from: string,
    to: string,
    tokenId: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "safeTransferFrom",
      from,
      to,
      tokenId
    );
    await tx.wait();
  }
  async safeTransferFrom2(
    from: string,
    to: string,
    tokenId: string,
    data: number
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "safeTransferFrom",
      from,
      to,
      tokenId,
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
  async transferFrom(from: string, to: string, tokenId: string): Promise<void> {
    const amountValue = parseUnits(tokenId, 18);
    const tx = await this.smart.callMethod(
      "transferFrom",
      from,
      to,
      amountValue
    );
    await tx.wait();
  }
  async transfer(to: string, amount: string): Promise<void> {
    const amountValue = parseUnits(amount, 18);
    const tx = await this.smart.callMethod("transfer", to, amountValue);
    await tx.wait();
  }
  async transferOwnership(newOwner: string): Promise<void> {
    const tx = await this.smart.callMethod("transferOwnership", newOwner);
    await tx.wait();
  }
}
