import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes-for-sale-filter',
  templateUrl: './homes-for-sale-filter.page.html',
  styleUrls: ['./homes-for-sale-filter.page.scss'],
})
export class HomesForSaleFilterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  GoToHomesForSale(){
    this.router.navigate(['/homes-for-sale']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    this.router.navigate(['/profile']);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
