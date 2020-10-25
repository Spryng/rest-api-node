import { ListMessageResponse } from "../interfaces/api";
import { PartialMessage, Message } from "../interfaces/message";
import { ListMessageFilters, ListMessageIncludes } from "../interfaces/parameters";
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

    async list(params?: ListMessageFilters, includes?: ListMessageIncludes[]) {
        const { data } = await this.spryng.sendRequest({
            endpoint: LIST_MESSAGES_ENDPOINT,
            requestType: 'GET',
            headers: [],
            filters: params,
            includes: includes
        })

        return data as ListMessageResponse
    }
}