import { Balance } from "./balance";
import { Message, PartialMessage } from "./message";
import { CancelMessageParams, ListMessageFilters, RequestIncludes, ShowMessageParams } from "./parameters";

export interface SendMessageSpec {
    (message: PartialMessage): Message | Promise<Message>
}

export interface ListMessageSpec {
    (params?: ListMessageFilters, includes?: RequestIncludes): ListMessageResponse | Promise<ListMessageResponse>
}

export interface ShowMessageSpec {
    (params: ShowMessageParams, includes?: RequestIncludes): Message | Promise<Message>
}

export interface CancelMessageSpec {
    (params: CancelMessageParams): boolean | Promise<boolean>
}

export interface MessageApiSpec {
    send: SendMessageSpec
    list: ListMessageSpec
    show: ShowMessageSpec
    cancel: CancelMessageSpec
}

export interface GetBalanceSpec {
    (): Balance | Promise<Balance>
}

export interface BalanceApiSpec {
    get: GetBalanceSpec
}

export interface ListMessageResponse {
    total: number,
    per_page: number,
    current_page: number,
    last_page: number,
    next_page_url: string,
    prev_page_url: string,
    from: number,
    to: number,
    data: Message[]
}