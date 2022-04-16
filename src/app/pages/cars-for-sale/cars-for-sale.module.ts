import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsForSalePageRoutingModule } from './cars-for-sale-routing.module';

import { CarsForSalePage } from './cars-for-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsForSalePageRoutingModule
  ],
  declarations: [CarsForSalePage]
})
export class CarsForSalePageModule {}
