import axios, { AxiosInstance } from "axios"
import { stringify } from "qs"
import { SpryngRequest } from "./interfaces/http"
import { BalanceClient } from "./resources/balance-client"
import { MessageClient } from "./resources/message-client"

const API_BASE_URL = 'https://rest.spryngsms.com/v1'
const VERSION = '0.1.0'

export class Spryng {
    readonly baseURL: string
    readonly version: string
    private readonly http: AxiosInstance
    private apiKey: string

    public message = new MessageClient(this)
    public balance = new BalanceClient(this)

    constructor(apiKey: string) {
        this.baseURL = API_BASE_URL
        this.version = VERSION
        this.apiKey = apiKey
        this.http = axios.create({baseURL: this.baseURL})
    }

    async sendRequest(request: SpryngRequest) {
        // Add params to the url if any are set
        const query = this.generateQueryString(request)
        const url = query.length 
            ? `${request.endpoint}?${this.generateQueryString(request)}`
            : `${request.endpoint}`

        return this.http.request({
            url: url,
            method: request.requestType,
            data: request.body,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                'User-Agent': `spryng-node/${this.version}`,
                ...(request.headers && request.headers.length > 0 ?
                    request.headers.reduce((acc, h) => acc = {...acc, ...h})
                    : {}),
            }
        })
    }

    generateQueryString(request: SpryngRequest) {
        const query = {
            filters: request.filters,
            includes: request.includes,
            parameters: request.parameters
        }

        return stringify(query)
    }
}