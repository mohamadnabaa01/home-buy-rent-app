import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes-for-rent-filter',
  templateUrl: './homes-for-rent-filter.page.html',
  styleUrls: ['./homes-for-rent-filter.page.scss'],
})
export class HomesForRentFilterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    this.router.navigate(['/profile']);
  }
  GoToFavorites(){
    this.router.navigate(['/favorites']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
