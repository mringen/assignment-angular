import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {

state: number = 0;

changeColor() {
  if(this.state == 3) {
    this.state = 0;
  }
  else {
    this.state += 1
  }
}

  constructor() { }

  ngOnInit() {
  }

}
