import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsForSalePage } from './cars-for-sale.page';

const routes: Routes = [
  {
    path: '',
    component: CarsForSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsForSalePageRoutingModule {}
