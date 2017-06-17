import { Component } from '@angular/core';

let list = [
  'Green',
  'Blue',
  'Red',
  'Purple'
];

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})
export class AppComponent  { colors = list; }
