import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes-for-rent-more-info',
  templateUrl: './homes-for-rent-more-info.page.html',
  styleUrls: ['./homes-for-rent-more-info.page.scss'],
})
export class HomesForRentMoreInfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
