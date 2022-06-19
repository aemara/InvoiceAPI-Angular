import { Component, OnInit, Input } from '@angular/core';
import { InvoiceDetail } from 'src/app/models/invoice-detail';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
invoiceDetail! : InvoiceDetail;
invoiceId!: any;

  constructor(private service: InvoiceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => { 
      this.invoiceId = params.get('id'); 
  });
    this.service.getInvoiceDetail(this.invoiceId).subscribe(invoiceDetail => this.invoiceDetail = invoiceDetail);
  }

  downloadReportPdf() {
    this.service.pdfInvoice(this.invoiceId).subscribe(
      (response: any) =>{
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const blob = new Blob([response], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        a.href = url; a.download = "InvoiceReport.pdf"; a.click();
        window.URL.revokeObjectURL(url);}
    );
  }

  downloadReportExcel() {
    this.service.excelInvoice(this.invoiceId).subscribe(
      (response: any) =>{
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const blob = new Blob([response], { type: "application/xlsx" });
        const url = window.URL.createObjectURL(blob);
        a.href = url; a.download = "Invoice Report.xlsx"; a.click();
        window.URL.revokeObjectURL(url);}
    );
  }

}
