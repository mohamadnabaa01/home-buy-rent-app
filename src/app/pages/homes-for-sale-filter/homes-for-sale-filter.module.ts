import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesForSaleFilterPageRoutingModule } from './homes-for-sale-filter-routing.module';

import { HomesForSaleFilterPage } from './homes-for-sale-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesForSaleFilterPageRoutingModule
  ],
  declarations: [HomesForSaleFilterPage]
})
export class HomesForSaleFilterPageModule {}
