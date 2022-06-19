import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceSummary } from '../models/invoice-summary';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { InvoiceDetail } from '../models/invoice-detail';
import { Item } from '../models/item';
import { Invoice } from '../models/invoice';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiURL = "https://localhost:44391/api"
  itemList: Item[] = [];
  constructor(private http: HttpClient) { }

  getInvoiceSummaries(): Observable<InvoiceSummary[]> {
    return this.http.get<InvoiceSummary[]>(this.apiURL + "/invoices");
  }

  getInvoiceDetail(id: number) : Observable<InvoiceDetail> {
    console.log("getinvoicedetail called");
    return this.http.get<InvoiceDetail>(this.apiURL + `/invoices/${id}`);
  }

  postInvoice(invoice: Invoice) : Observable<InvoiceSummary>{
    return this.http.post<InvoiceSummary>(this.apiURL + `/invoices`, invoice);
  }

  pdfInvoice(id: number) : Observable<any> {
   return this.http.get(this.apiURL + `/invoices/pdf/${id}`, {responseType: 'blob'});
  }

  excelInvoice(id: number) : Observable<any> {
    return this.http.get(this.apiURL + `/invoices/excel/${id}`, {responseType: 'blob'});
  }

  putInvoice(id: number, invoice: Invoice) {
    return this.http.put<Invoice>(this.apiURL + `/invoices/${id}`, invoice)
  }


}
