import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Home, HomesForRentMoreInfoService } from 'src/app/apis/homes-for-rent-more-info.service';

@Component({
  selector: 'app-homes-for-rent-more-info',
  templateUrl: './homes-for-rent-more-info.page.html',
  styleUrls: ['./homes-for-rent-more-info.page.scss'],
})
export class HomesForRentMoreInfoPage implements OnInit {

  constructor(private router:Router, private service: HomesForRentMoreInfoService) { }

  HomeForRent: Home[];
  UserHome: User[];

  ngOnInit() {
    this.service.getHomeForRent().subscribe(response=>{
      if(response != null)
        this.HomeForRent = response;
    })
    this.service.getUser().subscribe(response=>{
      if(response != null)
        this.UserHome = response;
    })
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
