import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesForSaleMoreInfoPageRoutingModule } from './homes-for-sale-more-info-routing.module';

import { HomesForSaleMoreInfoPage } from './homes-for-sale-more-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesForSaleMoreInfoPageRoutingModule
  ],
  declarations: [HomesForSaleMoreInfoPage]
})
export class HomesForSaleMoreInfoPageModule {}
