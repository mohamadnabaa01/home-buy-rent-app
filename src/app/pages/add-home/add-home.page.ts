import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddHomeService, User_Home } from 'src/app/apis/add-home.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.page.html',
  styleUrls: ['./add-home.page.scss'],
})
export class AddHomePage implements OnInit {

  constructor(private router:Router, private service: AddHomeService, private storage: Storage) { }

  user_home: User_Home;
  ngOnInit() {
  }
  GoToSaleList(){
    this.router.navigate(['/sales-list']);
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
  public onSubmit(form: NgForm){
    const home = form.value;
    this.service.addHome(home, form.value.sale_type).subscribe(response =>{
      if(response != null){
        localStorage.setItem('home_id', String(response));
        this.router.navigate(['/sales-list']);
      }
    });
    const User_id = parseInt(localStorage.getItem('user_id'));
    const Home_id = parseInt(localStorage.getItem('home_id'));
    this.user_home = { user_id : User_id, home_id : Home_id};
    this.service.addHomeToUser(this.user_home, form.value.sale_type).subscribe(response =>{
      if(response != null){
        console.log("added home successfully");
      }
    });
  }

}
