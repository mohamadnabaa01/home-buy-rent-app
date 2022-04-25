import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/apis/login.service';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private service: LoginService, private storage: Storage) { }

  ngOnInit() {
    }

  GoToRegister(){
    this.router.navigate(['/register']);
  }

  GoToHomePage(){
    this.router.navigate(['/home-page']);
  }

  public onSubmit(form : NgForm){
    const user = form.value;
    this.service.checkUser(user).subscribe(response =>{
      if(response != null){
        localStorage.setItem('user_id', String(response));
        this.router.navigate(['/home-page']);
      }
    });
  }

}
