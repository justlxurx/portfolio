import {
    BrowserProvider,
    Contract,
    Eip1193Provider,
    formatEther,
    Interface,
    InterfaceAbi,
    JsonRpcSigner,
    parseEther
} from "ethers";
//import abi from "./abi/testUsdtAbi.json"

export class USDT {
    SMART_ADDRESS: string
    SALE_ADDRESS: string
    ABI: Interface | InterfaceAbi
    USER_ADDRESS?: string
    private ETHERS_PROVIDER?: BrowserProvider
    private SIGNER?: JsonRpcSigner;
    private CONTRACT?: Contract

    constructor(smartAddress: string, saleAddress: string, abi: Interface | InterfaceAbi) {
        this.SMART_ADDRESS = smartAddress
        this.SALE_ADDRESS = saleAddress
        this.ABI = abi
    }

    private initProvider(walletProvider: Eip1193Provider) {
        this.ETHERS_PROVIDER = new BrowserProvider(walletProvider)
    }

    private initAddress(address: string) {
        this.USER_ADDRESS = address
    }

    async init(walletProvider: Eip1193Provider, address: string) {
        this.initProvider(walletProvider)
        this.initAddress(address)

        this.SIGNER = await this.ETHERS_PROVIDER!.getSigner()
        this.CONTRACT = new Contract(this.SMART_ADDRESS, this.ABI, this.SIGNER)

        console.log("SIGNER", this.SIGNER)
        console.log("CONTRACT", this.CONTRACT)
        console.log("ADDRESS", this.USER_ADDRESS)
        console.log("PROVIDER", this.ETHERS_PROVIDER)
    }

    private checkInit() {
        if(!this.ETHERS_PROVIDER) throw new Error("Ethers provider is undefined")
        if(!this.USER_ADDRESS) throw new Error("User address is undefined")
        if(!this.SIGNER) throw new Error("Signer is undefined")
        if(!this.CONTRACT) throw new Error("Contract is undefined")
    }

    private async getProperty<T>(propertyName: 'decimals' | 'symbol' | 'name' | 'owner' | 'totalSupply'): Promise<T> {
        this.checkInit();

        const propertyValue = await this.CONTRACT![propertyName]();

        return propertyValue;
    }

    //Read contracts
    async allowance() {
        this.checkInit()

        const allowance = await this.CONTRACT!.allowance(this.USER_ADDRESS, this.SALE_ADDRESS)

        return formatEther(allowance)
    }

    async balanceOf() {
        this.checkInit()

        const balance = await this.CONTRACT!.balanceOf(this.USER_ADDRESS)

        return formatEther(balance)
    }

    async decimals() {
        const decimals = await this.getProperty<bigint>('decimals')

        return Number(decimals)
    }

    async symbol() {
        return await this.getProperty<string>('symbol')
    }

    async name() {
        return await this.getProperty<string>('name')
    }

    async owner() {
        return await this.getProperty<string>('owner')
    }

    async totalSupply() {
        const totalSupply = await this.getProperty<bigint>('totalSupply')

        return formatEther(totalSupply)
    }

    //Read contracts getter
    // getReadContracts() {
    //     return {
    //         allowance: this.allowance,
    //         balanceOf: this.balanceOf,
    //         decimals: this.decimals,
    //         symbol: this.symbol,
    //         name: this.name,
    //         owner: this.owner,
    //         totalSupply: this.totalSupply
    //     }
    // }

    //Write contracts
    async approve(value: string) {
        this.checkInit()

        const wei = parseEther(value)

        const tx = await this.CONTRACT!.approve(this.SALE_ADDRESS, wei)
        await tx.wait()
    }

    async burn(address: string, value: string) {
        this.checkInit()

        const wei = parseEther(value)

        await this.CONTRACT!.burn(address, wei)
    }

    async mint(address: string, value: string) {
        this.checkInit()

        const wei = parseEther(value)

        await this.CONTRACT!.mint(address, wei)
    }

    async transfer(address: string, value: string) {
        this.checkInit()

        const wei = parseEther(value)

        await this.CONTRACT!.transfer(address, wei)
    }

    async transferFrom(fromAddress: string, toAddress: string, value: string) {
        this.checkInit()

        const wei = parseEther(value)

        await this.CONTRACT!.transferFrom(fromAddress, toAddress, wei)
    }

    // //Write contracts getter
    // getWriteContracts() {
    //     return {
    //         approve: this.approve,
    //         burn: this.burn,
    //         mint: this.mint,
    //         transfer: this.transfer,
    //         transferFrom: this.transferFrom,
    //     }
    // }
}