import { Injectable, Input } from '@angular/core';
import {IBackpack} from './ibackpack';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    data: IBackpack[] = [
    {packed: 'shorts'},
    {packed: 'flipflops'},
    {packed: 'passport'},
    {packed: 'snorkel'}
  ]


  constructor() { }

  getData(): IBackpack[] {
    return this.data;
  }

  addItem(item: string) {
    this.data.push({packed: item});
  }
}
