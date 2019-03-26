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

  listService: ListService
  data: IBackpack[] = null;

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

}
