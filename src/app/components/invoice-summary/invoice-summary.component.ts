import { Component, Input, OnInit } from '@angular/core';
import {InvoiceSummary} from '../../models/invoice-summary';


@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent implements OnInit {

  @Input() invoiceSummary!: InvoiceSummary;

  constructor() { }

  ngOnInit(): void {

  }

}
