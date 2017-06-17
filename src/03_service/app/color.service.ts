import { Injectable } from '@angular/core';

let list = [
  'Green',
  'Blue',
  'Red',
  'Purple'
];

@Injectable()
export class ColorService {

    constructor() { }
    getColors(): string[] {
        return list;
    }
}
