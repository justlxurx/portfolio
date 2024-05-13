import {createWeb3Modal} from "@web3modal/ethers/react";
import {ethersConfig, chains, projectId} from "../config.ts";
import React, {PropsWithChildren} from "react";

// 5. Create a Web3Modal instance
createWeb3Modal({
    ethersConfig,
    chains,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    themeVariables: {
        // '--w3m-border-radius-master': '10px',
        '--w3m-font-family': 'Onest',
    },
    defaultChain: chains[0]
})

const Web3Provider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Web3Provider;