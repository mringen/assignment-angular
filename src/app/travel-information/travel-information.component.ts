import { Component, OnInit} from '@angular/core';
import { Idestination} from '../idestination';

@Component({
  selector: 'app-travel-information',
  templateUrl: './travel-information.component.html',
  styleUrls: ['./travel-information.component.scss']
})

export class TravelInformationComponent implements OnInit {
  idestination: Idestination;
  information: Idestination[] = [
    {
      destination: 'Greece',
      route: 'By sea'
    },
    {
      destination: 'Stockholm',
      route: 'By car'
    },
    {
      destination: 'Australia',
      route: 'By a kangaru'
    },
    {
      destination: 'Madagaskar',
      route: 'By sea on a delphine'
    },
  ];

  selectedDestionation: Idestination = null;

comparePlaces(x:any, y: any) {
  if( x && y ) {
    return x.destination === y.destination && x.route === y.route;
  }
    return false;
}
  constructor() { }

  ngOnInit() { }

  showTravel(idestination: Idestination) {
    this.selectedDestionation = idestination;
  }

  reset() {
    this.selectedDestionation = null
  }

}
