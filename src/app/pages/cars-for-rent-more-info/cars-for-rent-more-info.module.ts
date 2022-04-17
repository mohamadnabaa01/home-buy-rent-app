import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsForRentMoreInfoPageRoutingModule } from './cars-for-rent-more-info-routing.module';

import { CarsForRentMoreInfoPage } from './cars-for-rent-more-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsForRentMoreInfoPageRoutingModule
  ],
  declarations: [CarsForRentMoreInfoPage]
})
export class CarsForRentMoreInfoPageModule {}
