import Axios from "axios";
import { ListMessageResponse, MessageApiSpec } from "../interfaces/api";
import { PartialMessage, Message } from "../interfaces/message";
import { CancelMessageParams, ListMessageFilters, RequestIncludes, ShowMessageParams } from "../interfaces/parameters";
import { Spryng } from "../spryng";

const CREATE_MESSAGE_ENDPOINT = '/messages'
const LIST_MESSAGES_ENDPOINT = '/messages'
const SHOW_MESSAGE_ENDPOINT = '/messages/{id}'
const CANCEL_MESSAGE_ENDPOINT = '/messages/{id}/cancel'

export class MessageClient implements MessageApiSpec {
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

    async list(params?: ListMessageFilters, includes?: RequestIncludes) {
        const { data } = await this.spryng.sendRequest({
            endpoint: LIST_MESSAGES_ENDPOINT,
            requestType: 'GET',
            headers: [],
            filters: params,
            includes: includes
        })

        return data as ListMessageResponse
    }

    async show(params: ShowMessageParams, includes?: RequestIncludes) {
        const { data } = await this.spryng.sendRequest({
            endpoint: SHOW_MESSAGE_ENDPOINT.replace('{id}', params.id),
            requestType: 'GET',
            headers: [],
            includes: includes
        })

        return data as Message
    }

    async cancel(params: CancelMessageParams) {
        const { status } = await this.spryng.sendRequest({
            endpoint: CANCEL_MESSAGE_ENDPOINT.replace('{id}', params.id),
            requestType: 'POST',
            headers: [],
        })

        return status === 200
    }
}