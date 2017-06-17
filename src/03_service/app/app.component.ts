import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
})
export class AppComponent {
  public colors: string[];
  constructor(private colorService: ColorService) {
    this.colors = colorService.getColors();
  }

}
