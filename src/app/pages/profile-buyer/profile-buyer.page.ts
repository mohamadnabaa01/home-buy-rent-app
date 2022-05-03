import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-buyer',
  templateUrl: './profile-buyer.page.html',
  styleUrls: ['./profile-buyer.page.scss'],
})
export class ProfileBuyerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  GoToEditProfile(){
    this.router.navigate(['/edit-profile']);
  }
  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }
  GoToProfile(){
    const user_type = localStorage.getItem('user_type');
    this.router.navigate(['/profile-' + user_type]);
  }
  GoToHomesForRent(){
    this.router.navigate(['/homes-for-rent']);
  }
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
