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

export class Sale {
    SMART_ADDRESS: string
    ABI: Interface | InterfaceAbi
    USER_ADDRESS?: string
    private ETHERS_PROVIDER?: BrowserProvider
    private SIGNER?: JsonRpcSigner;
    private CONTRACT?: Contract

    constructor(smartAddress: string, abi: Interface | InterfaceAbi) {
        this.SMART_ADDRESS = smartAddress
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

    private async getProperty<T>(propertyName: 'endTime' | 'ethRate' | 'max' | 'min' | 'owner' | 'pool' | 'soldAmount' | 'startTime' | 'token1' | 'token2' | 'tokenPriceETH' | 'tokenPriceUSDT'): Promise<T> {
        this.checkInit();

        const propertyValue = await this.CONTRACT![propertyName]();

        return propertyValue;
    }

    //Read contracts
    async endTime() {
        const endTime = await this.getProperty<number>('endTime')

        return endTime * 1000 // returns time in milliseconds
    }

    async startTime() {
        const startTime = await this.getProperty<number>('startTime')

        return startTime * 1000 // returns time in milliseconds
    }

    async max() {
        const max = await this.getProperty<bigint>('max')

        return formatEther(max)
    }

    async min() {
        const min = await this.getProperty<bigint>('min')

        return formatEther(min)
    }

    async pool() {
        const pool = await this.getProperty<bigint>('pool')

        return formatEther(pool)
    }

    async soldAmount() {
        const pool = await this.getProperty<bigint>('pool')

        return formatEther(pool)
    }

    async tokenPriceETH() {
        const tokenPriceETH = await this.getProperty<bigint>('tokenPriceETH')

        return formatEther(tokenPriceETH)
    }

    async tokenPriceUSDT() {
        const tokenPriceUSDT = await this.getProperty<bigint>('tokenPriceUSDT')

        return formatEther(tokenPriceUSDT)
    }

    async usersTokens() {
        this.checkInit();

        const usersTokens = await this.CONTRACT!.usersTokens(this.USER_ADDRESS)

        return formatEther(usersTokens)
    }

    //Write contracts
    async buyTokensByEth(value: string) {
        this.checkInit();

        const wei = parseEther(value)

        const tx = await this.CONTRACT!.buyTokensByEth(wei)
        await tx.wait()
    }

    async buyTokensByUsdt(value: string) {
        this.checkInit();

        const wei = parseEther(value)

        const tx = await this.CONTRACT!.buyTokensByUsdt(wei)
        await tx.wait()
    }
}