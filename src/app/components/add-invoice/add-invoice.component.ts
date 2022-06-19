import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Item } from 'src/app/models/item';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ItemInputComponent } from '../item-input/item-input.component';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  description!: string;
  invoiceDate!: Date;
  clientName!: string;
  clientAddress!: string;
  itemList!: Item[];
  numOfItems: number = 2;
  numArray: number[] = Array(2).fill(0).map((x,i)=>i);
  @ViewChildren(ItemInputComponent) itemInputComponents!: QueryList<ItemInputComponent>;

  constructor( private el: ElementRef, private invoiceService: InvoiceService) { }


  ngOnInit(): void {
    console.log(this.itemInputComponents);
  }

  incrementNumOfItems() {
    this.numOfItems++;
    this.numArray = Array(this.numOfItems).fill(0).map((x,i)=>i);
    console.log(this.itemInputComponents);
  }


  removeItem() {
    this.el.nativeElement.remove();
    console.log(this.itemInputComponents);
  }


  addInvoice() {
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

    this.invoiceService.postInvoice(invoice).subscribe();
  }
}
