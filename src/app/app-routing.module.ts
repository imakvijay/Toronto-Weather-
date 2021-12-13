import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CustomerComponent } from './customer/customer.component';



const routes: Routes = [
  { path: '', component: WeatherWidgetMainComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
