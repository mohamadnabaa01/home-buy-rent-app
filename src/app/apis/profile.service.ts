import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

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
export class ProfileService {

  private url = "http://localhost/HomeBuyRentApp/";

  constructor(private http: HttpClient, private storage: Storage) { }

  getProfile(){
    const user_id = localStorage.getItem("user_id");
    return this.http.get<[User]>(this.url + 'profile.php?user_id=' + user_id);
  }

  checkProfileChanges(user: User){
    const user_id = localStorage.getItem('user_id');
    return this.http.post(this.url + 'check-profile.php?user_id=' + user_id, user);
  }
}
