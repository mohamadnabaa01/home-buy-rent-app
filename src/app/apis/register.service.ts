import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface User{
  first_name: string,
  last_name: string,
  email_address: string,
  phone_number: string,
  password: string,
  user_type: string
}

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  
  private url = "http://localhost/HomeCarBuyRentApp/";

  constructor(private http: HttpClient) { }

  addAccount(user:User){
    return this.http.post(this.url + "register.php", JSON.stringify(user));
  }
}
