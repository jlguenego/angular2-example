import { Component, Input } from '@angular/core';
import { ColorService, IPair } from './color.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [ColorService]
})
export class AppComponent {
  public colors: IPair[];

  private selectedColor: IPair[] = [];

  @Input()
  public imgUrl = 'http://2ality.com/2011/10/logo-js/js.jpg';
  constructor(private colorService: ColorService) {
    this.colors = colorService.getColors();

  }
  public view(color: IPair) {
    const index = this.selectedColor.indexOf(color);
    if (index === -1) {
      this.selectedColor.push(color);
    } else {
      this.selectedColor.splice(index, 1);
    }
    this.imgUrl = color.image;
  }

  public getClass(color: IPair) {
    const index = this.selectedColor.indexOf(color);
    return (index === -1) ? '' : 'selected';
  }

}
