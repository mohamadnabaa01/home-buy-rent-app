import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileBuyerPageRoutingModule } from './profile-buyer-routing.module';

import { ProfileBuyerPage } from './profile-buyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileBuyerPageRoutingModule
  ],
  declarations: [ProfileBuyerPage]
})
export class ProfileBuyerPageModule {}
