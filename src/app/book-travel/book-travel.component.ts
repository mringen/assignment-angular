import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Idestination} from '../idestination'

@Component({
  selector: 'app-book-travel',
  templateUrl: './book-travel.component.html',
  styleUrls: ['./book-travel.component.scss']
})
export class BookTravelComponent implements OnInit {
  @Input() destination: string;
  @Input() route: string;
  @Output() onSelected = new EventEmitter<Idestination>();
  @Input() markedDestination: boolean;

  constructor() { }

  ngOnInit() {
  }

  showTravel() {
    this.onSelected.emit({
      destination: this.destination,
      route: this.route
    })
  }

}









//
