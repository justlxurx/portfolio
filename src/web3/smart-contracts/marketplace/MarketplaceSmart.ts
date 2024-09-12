import {
  Eip1193Provider,
  formatUnits,
  Interface,
  InterfaceAbi,
  parseUnits,
} from "ethers";
import { IMarketplaceSmart } from "./interface";
import { Smart } from "../interface";

export class MarketplaceSmart implements IMarketplaceSmart {
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

  async NFT(): Promise<string> {
    const nft = await this.smart.callStaticReadMethod<string>("NFT");
    return nft;
  }

  async Price(): Promise<number> {
    const price = await this.smart.callStaticReadMethod<number>("Price");
    return price;
  }

  async USDT(): Promise<string> {
    const usdt = await this.smart.callStaticReadMethod<string>("USDT");
    return usdt;
  }

  async getOffers(): Promise<string> {
    const getOffers = await this.smart.callStaticReadMethod<string>(
      "getOffers"
    );
    return getOffers;
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

  // Write contracts

  async buyNFT(tokenId: string, amountToBuy: string): Promise<void> {
    const amountValue = parseUnits(amountToBuy, 18);
    const tx = await this.smart.callMethod("buyNFT", tokenId, amountValue);
    await tx.wait();
  }

  async onERC1155BatchReceived(
    address1: string,
    address2: string,
    amount1: string,
    amount2: string,
    bytes: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "onERC1155BatchReceived",
      address1,
      address2,
      amount1,
      amount2,
      bytes
    );
    await tx.wait();
  }
  async onERC1155Received(
    address1: string,
    address2: string,
    amount1: string,
    amount2: string,
    bytes: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "onERC1155Received",
      address1,
      address2,
      amount1,
      amount2,
      bytes
    );
    await tx.wait();
  }

  async renounceOwnership(): Promise<void> {
    const tx = await this.smart.callMethod("renounceOwnership");
    await tx.wait();
  }

  async setOffer(
    tokenid: string,
    _price: string,
    _amountToSell: string
  ): Promise<void> {
    const tx = await this.smart.callMethod(
      "setOffer",
      tokenid,
      _price,
      _amountToSell
    );
    await tx.wait();
  }

  async transferOwnership(newOwner: string): Promise<void> {
    const tx = await this.smart.callMethod("transferOwnership", newOwner);
    await tx.wait();
  }

  async withdrawNFT(tokenId: string): Promise<void> {
    const tx = await this.smart.callMethod("withdrawNFT", tokenId);
    await tx.wait();
  }

  async withdrawUSDT(): Promise<void> {
    const tx = await this.smart.callMethod("withdrawUSDT");
    await tx.wait();
  }
}
