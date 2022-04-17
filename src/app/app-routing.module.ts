import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('././pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homes-for-sale-filter',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('././pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'homes-for-sale',
    loadChildren: () => import('./pages/homes-for-sale/homes-for-sale.module').then( m => m.HomesForSalePageModule)
  },
  {
    path: 'homes-for-rent',
    loadChildren: () => import('./pages/homes-for-rent/homes-for-rent.module').then( m => m.HomesForRentPageModule)
  },
  {
    path: 'cars-for-sale',
    loadChildren: () => import('./pages/cars-for-sale/cars-for-sale.module').then( m => m.CarsForSalePageModule)
  },
  {
    path: 'cars-for-rent',
    loadChildren: () => import('./pages/cars-for-rent/cars-for-rent.module').then( m => m.CarsForRentPageModule)
  },
  {
    path: 'homes-for-sale-more-info',
    loadChildren: () => import('./pages/homes-for-sale-more-info/homes-for-sale-more-info.module').then( m => m.HomesForSaleMoreInfoPageModule)
  },
  {
    path: 'homes-for-rent-more-info',
    loadChildren: () => import('./pages/homes-for-rent-more-info/homes-for-rent-more-info.module').then( m => m.HomesForRentMoreInfoPageModule)
  },
  {
    path: 'cars-for-sale-more-info',
    loadChildren: () => import('./pages/cars-for-sale-more-info/cars-for-sale-more-info.module').then( m => m.CarsForSaleMoreInfoPageModule)
  },
  {
    path: 'cars-for-rent-more-info',
    loadChildren: () => import('./pages/cars-for-rent-more-info/cars-for-rent-more-info.module').then( m => m.CarsForRentMoreInfoPageModule)
  },
  {
    path: 'homes-for-sale-filter',
    loadChildren: () => import('./pages/homes-for-sale-filter/homes-for-sale-filter.module').then( m => m.HomesForSaleFilterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
