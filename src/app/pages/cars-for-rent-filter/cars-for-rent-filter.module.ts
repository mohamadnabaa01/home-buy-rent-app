import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsForRentFilterPageRoutingModule } from './cars-for-rent-filter-routing.module';

import { CarsForRentFilterPage } from './cars-for-rent-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsForRentFilterPageRoutingModule
  ],
  declarations: [CarsForRentFilterPage]
})
export class CarsForRentFilterPageModule {}
