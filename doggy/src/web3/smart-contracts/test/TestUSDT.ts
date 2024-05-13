import abi from "./abi/testUsdtAbi.json"
import {USDT} from "../abstract/USDT.ts";

const SMART_ADDRESS = import.meta.env.VITE_TEST_USDT_ADDRESS as string
const SALE_ADDRESS = import.meta.env.VITE_TEST_SALE_ADDRESS as string

export const testUSDTSmart = new USDT(SMART_ADDRESS, SALE_ADDRESS, abi.result)
