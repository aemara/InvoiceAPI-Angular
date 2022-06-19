import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceDetail } from 'src/app/models/invoice-detail';
import { Item } from 'src/app/models/item';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ItemInputComponent } from '../item-input/item-input.component';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  description!: string;
  invoiceDate!: Date;
  clientName!: string;
  clientAddress!: string;
  itemList!: Item[];
  numOfItems: number = 2;
  numArray: number[] = Array(2).fill(0).map((x,i)=>i);
  invoiceId!: any;
  invoice!: InvoiceDetail;
  @ViewChildren(ItemInputComponent) itemInputComponents!: QueryList<ItemInputComponent>;
  
  constructor(private invoiceService: InvoiceService, private _activatedRoute: ActivatedRoute, private el: ElementRef) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => { 
      this.invoiceId = params.get('id'); 
  })

  this.invoiceService.getInvoiceDetail(this.invoiceId).subscribe(invoice => {
    this.description = invoice.description;
    this.clientName = invoice.client.clientName;
    this.clientAddress = invoice.client.clientAddress;
    this.itemList = invoice.items;
    this.numOfItems = invoice.items.length;
    this.numArray =  Array(invoice.items.length).fill(0).map((x,i)=>i);
  });
  
}

  incrementNumOfItems() {
    this.numOfItems++;
    this.numArray = Array(this.numOfItems).fill(0).map((x,i)=>i);
  }


  removeItem() {
    this.el.nativeElement.remove()
    console.log(this.itemInputComponents);
  }

  editInvoice() {
    this.itemInputComponents.forEach(element => {
      if(element.itemName) {
        element.addItem();
      }
    });

    let invoice : Invoice = {
      description: this.description,
      invoiceDate: this.invoiceDate,
      paymentTerms: "string",
      client: {
        clientName: this.clientName,
        clientAddress: this.clientAddress,
        clientEmail: "string",
        clientCity: "string",
        clientCountry: "string",
        clientPostal: "string"
      },
      billFromAddress: "string",
      billFromCity: "string",
      billFromCountry: "string",
      billFromPostal: "string",
      items: this.invoiceService.itemList
    }

    console.log(this.invoiceService.itemList);
    this.invoiceService.putInvoice(this.invoiceId, invoice).subscribe();
  }
}


