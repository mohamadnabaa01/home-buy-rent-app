import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsForRentPage } from './cars-for-rent.page';

const routes: Routes = [
  {
    path: '',
    component: CarsForRentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsForRentPageRoutingModule {}
