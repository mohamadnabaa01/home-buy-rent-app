import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsForSaleMoreInfoPage } from './cars-for-sale-more-info.page';

const routes: Routes = [
  {
    path: '',
    component: CarsForSaleMoreInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsForSaleMoreInfoPageRoutingModule {}
