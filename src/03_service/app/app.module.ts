import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorService } from "./color.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
