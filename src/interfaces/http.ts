import { PartialMessage } from "./message"
import { RequestParameters } from "./parameters"

export type HttpRequestType = 'GET' | 'POST'

export type SpryngHeader = 'Accept' | 'Content-Type' | 'Content-Length'
export type Header = Record<SpryngHeader, string | number>

export interface SpryngRequest {
    endpoint: string
    headers: Header[]
    requestType: HttpRequestType
    parameters?: RequestParameters
    body?: PartialMessage
}
