import { Item } from "./item"

export interface Invoice {
    description: string,
    invoiceDate: Date,
    paymentTerms: string,
    client: {
        clientName: string,
        clientAddress: string,
        clientEmail: string,
        clientCity: string,
        clientCountry: string,
        clientPostal: string
    }
    billFromAddress: string,
    billFromCity: string,
    billFromCountry: string,
    billFromPostal: string,
    items: Item[]
}