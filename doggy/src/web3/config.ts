import {defaultConfig} from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = import.meta.env.VITE_WALLET_CONNECT_ID as string

// 2. Set chains
const chains = [
    {
        chainId: 56,
        name: 'BNB Smart Chain',
        currency: 'BNB',
        explorerUrl: 'https://bscscan.com/',
        rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
        chainId: 97,
        name: 'BNB Smart Chain Testnet',
        currency: 'tBNB',
        explorerUrl: 'https://testnet.bscscan.com/',
        rpcUrl: 'https://bsc-testnet-rpc.publicnode.com'
    }
]

// 3. Create a metadata object
const metadata = {
    name: 'Doggy AI',
    description: 'Doggy AI',
    url: 'http://77.240.39.52',
    icons: ['http://77.240.39.52']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 56, // used for the Coinbase SDK
})

export {projectId, chains, ethersConfig}