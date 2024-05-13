import abi from "./abi/testEthAbi.json";
import {ETH} from "../abstract/ETH.ts";

const SMART_ADDRESS = import.meta.env.VITE_TEST_ETH_ADDRESS as string
const SALE_ADDRESS = import.meta.env.VITE_TEST_SALE_ADDRESS as string

export const testETHSmart = new ETH(SMART_ADDRESS, SALE_ADDRESS, abi.result)
