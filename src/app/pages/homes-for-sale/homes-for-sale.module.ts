import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesForSalePageRoutingModule } from './homes-for-sale-routing.module';

import { HomesForSalePage } from './homes-for-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesForSalePageRoutingModule
  ],
  declarations: [HomesForSalePage]
})
export class HomesForSalePageModule {}
