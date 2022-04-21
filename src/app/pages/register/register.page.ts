import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'; 
import { RegisterService } from 'src/app/apis/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registrationForm = this.formBuilder.group({
    first_name:[''],
    last_name:[''],
    email_address:[''],
    phone_number:[''],
    password:[''],
    user_type:['']
  });

  constructor(private router: Router, private formBuilder:FormBuilder, private service:RegisterService) { }

  ngOnInit() {
  }

  GoToLogIn(){
    this.router.navigate(['/login']);
  }
 
  onSubmit(){
    this.service.addAccount(this.registrationForm.value);
  }

}
