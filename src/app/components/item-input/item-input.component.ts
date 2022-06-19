import { Component, ElementRef, Input, OnInit , Output, Renderer2} from '@angular/core';
import { Item } from 'src/app/models/item';
import { InvoiceService } from 'src/app/services/invoice.service';
@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {

itemName!: string;
quantity!: number;
price!: number;
item!: Item;
@Input() index!: any;
@Input() itemList!: Item[];
@Input() nameInput!: string;
@Input() quantityInput!: number;
@Input() priceInput!: number;
  constructor(private el: ElementRef, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
   this.itemName = this.nameInput;
   this.quantity = this.quantityInput;
   this.price = this.priceInput;
  }

  removeItem() {
    this.el.nativeElement.remove()
  }


  addItem() {
    this.item = {name: this.itemName, quantity: this.quantity, price: this.price};
    this.invoiceService.itemList.push(this.item);
  }
}
