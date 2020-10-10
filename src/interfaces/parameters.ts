export type ListMessageParams = {
    originator: string,
    recipient_number: string,
    reference: string,
    created_from: string,
    created_until: string,
    scheduled_from: string,
    scheduled_until: string,
    status: string
}
export type ShowMessageParams = {
    id: string
}
export type CancelMessageParams = {
    id: string
}
export type RequestParameters = ListMessageParams | ShowMessageParams | CancelMessageParams