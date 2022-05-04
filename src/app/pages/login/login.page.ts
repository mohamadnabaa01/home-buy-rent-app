import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/apis/login.service';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private service: LoginService, private storage: Storage, private alertController: AlertController) { }

  ngOnInit() {
    }

  GoToRegister(){
    this.router.navigate(['/register']);
  }
  async showAlertFail(){
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Email or password is incorrect. Please try again',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailEmail(){
    const alert = await this.alertController.create({
      header: 'Email address required',
      message: 'Please enter a valid email address',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFailPassword(){
    const alert = await this.alertController.create({
      header: 'Password required',
      message: 'Please enter a password',
      buttons: ['OK']
    });
    await alert.present();
  }

  public onSubmit(form : NgForm){
    const email_address = form.value.email_address;
    const password = form.value.password;
    if(email_address == '')
      this.showAlertFailEmail();
    else{
      if(password == '')
        this.showAlertFailPassword();
    }
    if(email_address != '' && password != ''){
      const user = form.value;
      this.service.checkUserID(user).subscribe(response =>{
        if(response != null){
          localStorage.setItem('user_id', String(response));
          this.router.navigate(['/home-page']);
        }
        else{
          this.showAlertFail();
        }
      });
      this.service.checkUserType(user).subscribe(response =>{
        if(response != null){
          localStorage.setItem('user_type', String(response));
        }
      });
    }
  }

}
