import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-for-rent',
  templateUrl: './cars-for-rent.page.html',
  styleUrls: ['./cars-for-rent.page.scss'],
})
export class CarsForRentPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToCarsForRentMoreInfo(){
    this.router.navigate(['/cars-for-rent-more-info']);
  }
  GoToCarsForRentFilter(){
    this.router.navigate(['/cars-for-rent-filter']);
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
