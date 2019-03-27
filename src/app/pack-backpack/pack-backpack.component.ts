import { Component, OnInit, Input, Output } from '@angular/core';
import { ListService } from '../list.service';
import { IBackpack } from '../ibackpack';


@Component({
  selector: 'app-pack-backpack',
  templateUrl: './pack-backpack.component.html',
  styleUrls: ['./pack-backpack.component.scss']
})
export class PackBackpackComponent implements OnInit {
  @Input() iBackpack: IBackpack;
  @Input() packed: string = '';
  checkHighLight: boolean = false;

  listService: ListService
  data: IBackpack[] = null;
  selectedItems: IBackpack[] = [];

  constructor(listScervice: ListService) {
    this.listService = listScervice
  }
  ngOnInit() {
    this.data = this.listService.getData()
  }

  addToBackpack() {
    this.listService.addItem(this.packed);
    this.packed = '';
  }

  deleteItem(index) {
    this.data.splice(index, 1)
  }

  highLight(item: IBackpack) {
    if (!this.selectedItems.includes(item)) {
      this.selectedItems.push(item);
    } else {
      let index = this.selectedItems.indexOf(item);
      if(index >= 0)
        this.selectedItems.splice(index, 1);
    }
    
  }
}
