import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Home, HomesForRentMoreInfoService } from 'src/app/apis/homes-for-rent-more-info.service';

@Component({
  selector: 'app-homes-for-rent-more-info',
  templateUrl: './homes-for-rent-more-info.page.html',
  styleUrls: ['./homes-for-rent-more-info.page.scss'],
})
export class HomesForRentMoreInfoPage implements OnInit {

  HomeForRent: [Home];
  UserHome: [User];

  constructor(private router:Router, private service: HomesForRentMoreInfoService) { }

  ngOnInit() {
    this.service.getHomeForRent().subscribe(response=>{
      if(response != null)
        this.HomeForRent = response;
      console.log(this.HomeForRent);
    })
    this.service.getUser().subscribe(response=>{
      if(response != null)
        this.UserHome = response;
      console.log(this.UserHome);
    })
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
