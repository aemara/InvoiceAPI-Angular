import { Component, OnInit } from '@angular/core';
import { InvoiceSummary } from 'src/app/models/invoice-summary';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoiceSummaries! : InvoiceSummary[];
  
  constructor(private service : InvoiceService) { }

  ngOnInit(): void {
    this.service.getInvoiceSummaries().subscribe(invoiceSummaries => this.invoiceSummaries = invoiceSummaries);
    console.log(this.invoiceSummaries);
  }

}
