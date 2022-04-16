import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsForRentPageRoutingModule } from './cars-for-rent-routing.module';

import { CarsForRentPage } from './cars-for-rent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsForRentPageRoutingModule
  ],
  declarations: [CarsForRentPage]
})
export class CarsForRentPageModule {}
