import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceSummaryComponent } from './components/invoice-summary/invoice-summary.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ItemInputComponent } from './components/item-input/item-input.component';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';

const appRoutes : Routes = [
  {path: '', component: InvoiceListComponent},
  {path: 'invoice/:id', component: InvoiceDetailComponent},
  {path: 'addinvoice', component: AddInvoiceComponent},
  {path: 'editinvoice/:id', component: EditInvoiceComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceSummaryComponent,
    InvoiceDetailComponent,
    AddInvoiceComponent,
    LoginComponent,
    ItemInputComponent,
    EditInvoiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
