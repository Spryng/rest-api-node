import { ListMessageResponse } from "../interfaces/api";
import { PartialMessage, Message } from "../interfaces/message";
import { ListMessageParams } from "../interfaces/parameters";
import { Spryng } from "../spryng";

const CREATE_MESSAGE_ENDPOINT = '/messages'
const LIST_MESSAGES_ENDPOINT = '/messages'

export class MessageClient {
    constructor(private readonly spryng: Spryng) { }

    async send(message: PartialMessage) {
        const {data} = await this.spryng.sendRequest({
            endpoint: CREATE_MESSAGE_ENDPOINT,
            requestType: 'POST',
            headers: [],            
            body: message
        })

        return data as Message
    }

    async list(params: ListMessageParams) {
        const {data} = await this.spryng.sendRequest({
            endpoint: LIST_MESSAGES_ENDPOINT,
            requestType: 'GET',
            headers: [],
            parameters: params,
        })

        return data as ListMessageResponse
    }
}