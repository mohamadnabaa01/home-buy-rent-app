import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home, User, HomesForSaleMoreInfoService } from 'src/app/apis/homes-for-sale-more-info.service';

@Component({
  selector: 'app-homes-for-sale-more-info',
  templateUrl: './homes-for-sale-more-info.page.html',
  styleUrls: ['./homes-for-sale-more-info.page.scss'],
})
export class HomesForSaleMoreInfoPage implements OnInit {

  HomeForSale: [Home];
  UserHome: [User];

  constructor(private router:Router, private service: HomesForSaleMoreInfoService) { }

  ngOnInit() {
    this.service.getHomeForSale().subscribe(response=>{
      if(response != null)
        this.HomeForSale = response;
      console.log(this.HomeForSale);
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
  GoToLogIn(){
    this.router.navigate(['/login']);
  }

}
