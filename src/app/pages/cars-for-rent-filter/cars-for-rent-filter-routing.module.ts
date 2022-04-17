import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsForRentFilterPage } from './cars-for-rent-filter.page';

const routes: Routes = [
  {
    path: '',
    component: CarsForRentFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsForRentFilterPageRoutingModule {}
