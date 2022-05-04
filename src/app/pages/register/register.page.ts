import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/apis/register.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(private router: Router, private service:RegisterService, private storage: Storage, private alertController: AlertController) { }

  ngOnInit() {
  }
 
  async showAlertSuccess(){
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Account was created successfully',
      buttons: ['OK']
    });
    await alert.present();
  }
  async showAlertFail(){
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Email address is already taken',
      buttons: ['OK']
    });
    await alert.present();
  }
  public onSubmit(form: NgForm){
    const user = form.value;
    this.service.addAccount(user).subscribe(response =>{
      if(response != null){
        this.showAlertSuccess();
        this.router.navigate(['/login']);
      }
      else{
        this.showAlertFail();
      }
    });
  }

}
