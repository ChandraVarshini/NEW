import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { QuantityincrementComponent } from './quantityincrement/quantityincrement.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewemployeeComponent,
    EditemployeeComponent,
    QuantityincrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
