import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InventoryApp }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ InventoryApp ],
  bootstrap:    [ InventoryApp ]
})
export class AppModule { }



