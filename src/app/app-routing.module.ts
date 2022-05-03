import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
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
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
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
    path: 'homes-for-sale-more-info',
    loadChildren: () => import('./pages/homes-for-sale-more-info/homes-for-sale-more-info.module').then( m => m.HomesForSaleMoreInfoPageModule)
  },
  {
    path: 'homes-for-rent-more-info',
    loadChildren: () => import('./pages/homes-for-rent-more-info/homes-for-rent-more-info.module').then( m => m.HomesForRentMoreInfoPageModule)
  },
  {
    path: 'profile-seller',
    loadChildren: () => import('./pages/profile-seller/profile-seller.module').then( m => m.ProfileSellerPageModule)
  },
  {
    path: 'profile-buyer',
    loadChildren: () => import('./pages/profile-buyer/profile-buyer.module').then( m => m.ProfileBuyerPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'add-home',
    loadChildren: () => import('./pages/add-home/add-home.module').then( m => m.AddHomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
