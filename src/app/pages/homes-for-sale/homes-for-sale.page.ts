import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes-for-sale',
  templateUrl: './homes-for-sale.page.html',
  styleUrls: ['./homes-for-sale.page.scss'],
})
export class HomesForSalePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  GoToHomesForSaleFilter(){
    this.router.navigate(['/homes-for-sale-filter']);
  }
  GoToHomesForSaleMoreInfo(){
    this.router.navigate(['/homes-for-sale-more-info']);
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
