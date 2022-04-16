import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesForSaleMoreInfoPage } from './homes-for-sale-more-info.page';

const routes: Routes = [
  {
    path: '',
    component: HomesForSaleMoreInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesForSaleMoreInfoPageRoutingModule {}
