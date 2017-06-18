import { Injectable } from '@angular/core';

export interface IPair {
    name: string,
    value: string,
    image: string,
}

let list: IPair[] = [
  {name: 'Green', value: 'hsl(120, 100%, 50%)', image: 'https://vuejs.org/images/logo.png'},
  {name: 'Blue', value: 'hsl(240, 100%, 50%)', image: 'https://camo.githubusercontent.com/f1d103872f836f33dbff7a74ed819004f792a4ad/687474703a2f2f7765627061636b2e6769746875622e696f2f6173736574732f6c6f676f2e706e67'},
  {name: 'Red', value: 'hsl(0, 100%, 50%)', image: 'https://angular.io/assets/images/logos/angular/angular.svg'},
  {name: 'Purple', value: 'hsl(300, 100%, 50%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Visual_Studio_2013_Logo.svg/500px-Visual_Studio_2013_Logo.svg.png'},
];

@Injectable()
export class ColorService {

    constructor() { }
    getColors(): IPair[] {
        return list;
    }
}
