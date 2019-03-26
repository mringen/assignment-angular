import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrafficLightComponent} from './traffic-light/traffic-light.component';
import { TravelInformationComponent} from './travel-information/travel-information.component';
import { PackBackpackComponent} from './pack-backpack/pack-backpack.component';

const routes: Routes = [
  { path: 'traffic', component: TrafficLightComponent },
  { path: 'travel', component: TravelInformationComponent },
  { path: 'packing', component: PackBackpackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

// { path: '', component: AppComponent },
// { path: '404', component: AppComponent },
// { path: '**', redirectTo: '404' }
