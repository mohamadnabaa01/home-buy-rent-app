import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesForSaleFilterPage } from './homes-for-sale-filter.page';

const routes: Routes = [
  {
    path: '',
    component: HomesForSaleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesForSaleFilterPageRoutingModule {}
