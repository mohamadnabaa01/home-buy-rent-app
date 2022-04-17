import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesForRentMoreInfoPage } from './homes-for-rent-more-info.page';

const routes: Routes = [
  {
    path: '',
    component: HomesForRentMoreInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesForRentMoreInfoPageRoutingModule {}
