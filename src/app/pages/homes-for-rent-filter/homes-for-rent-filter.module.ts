import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesForRentFilterPageRoutingModule } from './homes-for-rent-filter-routing.module';

import { HomesForRentFilterPage } from './homes-for-rent-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesForRentFilterPageRoutingModule
  ],
  declarations: [HomesForRentFilterPage]
})
export class HomesForRentFilterPageModule {}
