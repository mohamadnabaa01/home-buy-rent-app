import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/apis/register.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(private router: Router, private service:RegisterService, private storage: Storage) { }

  ngOnInit() {
  }
 
  public onSubmit(form: NgForm){
    const user = form.value;
    this.service.addAccount(user).subscribe(response =>{
      if(response != null){
        localStorage.setItem('email-logged-in', String(response));
        this.router.navigate(['/home-page']);
      }
    });
  }

}
