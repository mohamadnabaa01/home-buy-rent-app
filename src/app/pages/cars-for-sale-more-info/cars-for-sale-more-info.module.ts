import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsForSaleMoreInfoPageRoutingModule } from './cars-for-sale-more-info-routing.module';

import { CarsForSaleMoreInfoPage } from './cars-for-sale-more-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsForSaleMoreInfoPageRoutingModule
  ],
  declarations: [CarsForSaleMoreInfoPage]
})
export class CarsForSaleMoreInfoPageModule {}
