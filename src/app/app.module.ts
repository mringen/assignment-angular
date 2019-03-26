import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { BookTravelComponent } from './book-travel/book-travel.component';
import { TravelInformationComponent } from './travel-information/travel-information.component';
import { PackBackpackComponent } from './pack-backpack/pack-backpack.component';
import { CheckListComponent } from './check-list/check-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    BookTravelComponent,
    TravelInformationComponent,
    PackBackpackComponent,
    CheckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
