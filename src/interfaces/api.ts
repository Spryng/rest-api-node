import { SpryngRequest } from "./http";
import { Message } from "./message";

export interface MessageApiSpec {
    create: SpryngRequest
    list: SpryngRequest
    show: SpryngRequest
    cancel: SpryngRequest
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