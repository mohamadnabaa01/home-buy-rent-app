import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesForRentPage } from './homes-for-rent.page';

const routes: Routes = [
  {
    path: '',
    component: HomesForRentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesForRentPageRoutingModule {}
