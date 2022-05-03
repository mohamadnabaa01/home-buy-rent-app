import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  first_name: string,
  last_name: string,
  email_address: string,
  phone_number: string
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = "http://localhost/HomeBuyRentApp/";

  constructor(private http: HttpClient) { }

  getProfile(){
    const user_id = localStorage.getItem("user_id");
    return this.http.get<[User]>(this.url + 'profile.php?user_id=' + user_id);
  }
}
