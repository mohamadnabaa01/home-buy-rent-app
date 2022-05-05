import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Home{
  image1: Blob,
  image2: Blob,
  image3: Blob,
  location: string,
  price: number,
  area: number,
  living_rooms: number,
  bedrooms: number,
  bathrooms: number,
  home_type: string 
}

export interface User_Home{
  user_id: number,
  home_id: number
}


@Injectable({
  providedIn: 'root'
})
export class AddHomeService {

  private url = 'http://localhost/HomeBuyRentApp/'

  constructor(private http: HttpClient) { }

  addHome(home: Home, sale_type: string){
    return this.http.post(this.url + sale_type + '_homes.php', home);
  }

  addHomeToUser(user_home: User_Home, sale_type: string){
    return this.http.post(this.url + 'user_' + sale_type + '_homes.php', user_home);
  }
}
