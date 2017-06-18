import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo.component';
import { ColorService } from "./color.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PhotoComponent],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
