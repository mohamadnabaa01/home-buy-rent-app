import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes-for-sale-more-info',
  templateUrl: './homes-for-sale-more-info.page.html',
  styleUrls: ['./homes-for-sale-more-info.page.scss'],
})
export class HomesForSaleMoreInfoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
