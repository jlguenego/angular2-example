import { Component } from '@angular/core';
import { ColorService, IPair } from './color.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [ColorService]
})
export class AppComponent {
  public colors: IPair[];
  constructor(private colorService: ColorService) {
    this.colors = colorService.getColors();

  }
  public view(color: IPair) {
    window.alert('color value: ' + color.value);
  }

}
