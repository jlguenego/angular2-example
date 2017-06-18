import { Component, Input } from '@angular/core';

@Component({
  selector: 'photo',
  template: `
  <div>
    <img [src]="image">
  </div>
  `,
  styles: [`
  img {
    height: 400px;
  }
  `]
})
export class PhotoComponent {
  @Input()
  public image: string;
}
