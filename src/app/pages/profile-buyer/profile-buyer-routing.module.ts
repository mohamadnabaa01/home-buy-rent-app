import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileBuyerPage } from './profile-buyer.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileBuyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileBuyerPageRoutingModule {}
