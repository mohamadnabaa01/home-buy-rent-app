import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes-for-rent',
  templateUrl: './homes-for-rent.page.html',
  styleUrls: ['./homes-for-rent.page.scss'],
})
export class HomesForRentPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToHomesForRentMoreInfo(){
    this.router.navigate(['/homes-for-rent-more-info']);
  }
  GoToHomesForRentFilter(){
    this.router.navigate(['/homes-for-rent-filter']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    this.router.navigate(['/profile']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
