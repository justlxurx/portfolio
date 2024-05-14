import abi from "./abi/testSaleAbi.json";
import {Sale} from "../abstract/Sale.ts";

const SMART_ADDRESS = import.meta.env.VITE_TEST_SALE_ADDRESS as string

export const testSaleSmart = new Sale(SMART_ADDRESS, abi.result)