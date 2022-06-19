export interface InvoiceDetail {
    invoiceId: number,
    description: string,
    client: {
        clientName: string,
        clientEmail: string,
        clientAddress: string,
    }
    invoiceDate: string,
    paymentDue: string,
    status: string,
    items: any[]
}