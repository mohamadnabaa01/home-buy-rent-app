import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesForSalePage } from './homes-for-sale.page';

const routes: Routes = [
  {
    path: '',
    component: HomesForSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesForSalePageRoutingModule {}
