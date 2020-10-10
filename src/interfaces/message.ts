export type MessageEncoding = 'plain' | 'unicode' | 'auto'

export interface Message {
    id: string
    encoding: MessageEncoding
    body: string
    route: string
    originator: string
    recipients: string[]
    createdAt: string
    updatedAt: string
    links: string[]
    reference?: string
    scheduled_at?: string
}

export type PartialMessage = Omit<Message, 'id' | 'createdAt' | 'updatedAt' | 'links'>