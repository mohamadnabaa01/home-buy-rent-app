import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsForSaleFilterPageRoutingModule } from './cars-for-sale-filter-routing.module';

import { CarsForSaleFilterPage } from './cars-for-sale-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsForSaleFilterPageRoutingModule
  ],
  declarations: [CarsForSaleFilterPage]
})
export class CarsForSaleFilterPageModule {}
