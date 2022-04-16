import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesForRentPageRoutingModule } from './homes-for-rent-routing.module';

import { HomesForRentPage } from './homes-for-rent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesForRentPageRoutingModule
  ],
  declarations: [HomesForRentPage]
})
export class HomesForRentPageModule {}
