import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesForRentMoreInfoPageRoutingModule } from './homes-for-rent-more-info-routing.module';

import { HomesForRentMoreInfoPage } from './homes-for-rent-more-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesForRentMoreInfoPageRoutingModule
  ],
  declarations: [HomesForRentMoreInfoPage]
})
export class HomesForRentMoreInfoPageModule {}
