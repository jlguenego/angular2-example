import { Injectable } from '@angular/core';

export interface IPair {
    name: string,
    value: string
}

let list: IPair[] = [
  {name: 'Green', value: 'hsl(120, 100%, 50%)'},
  {name: 'Blue', value: 'hsl(240, 100%, 50%)'},
  {name: 'Red', value: 'hsl(0, 100%, 50%)'},
  {name: 'Purple', value: 'hsl(300, 100%, 50%)'},
];

@Injectable()
export class ColorService {

    constructor() { }
    getColors(): IPair[] {
        return list;
    }
}
