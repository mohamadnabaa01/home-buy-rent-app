import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsForSaleFilterPage } from './cars-for-sale-filter.page';

const routes: Routes = [
  {
    path: '',
    component: CarsForSaleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsForSaleFilterPageRoutingModule {}
