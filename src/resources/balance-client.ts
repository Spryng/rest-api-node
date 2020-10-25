import { BalanceApiSpec } from "../interfaces/api";
import { Balance } from "../interfaces/balance";
import { Spryng } from "../spryng";

const GET_BALANCE_ENDPOINT = '/balance'

export class BalanceClient implements BalanceApiSpec {
    constructor(private readonly spryng: Spryng) { }
    
    async get() {
        const { data }  = await this.spryng.sendRequest({
            endpoint: GET_BALANCE_ENDPOINT,
            requestType: 'GET',
            headers: []
        })

        return data as Balance
    }
}