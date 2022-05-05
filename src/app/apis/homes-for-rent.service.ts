import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Home{
  image1: File,
  image2: File,
  image3: File,
  location: string,
  price: string,
  area: number,
  living_rooms: number,
  bedrooms: number,
  bathrooms: number,
  home_type: string
}

@Injectable({
  providedIn: 'root'
})
export class HomesForRentService {

  private url = 'http://localhost/HomeBuyRentApp/';

  constructor(private http: HttpClient) { }

  getHomesForRent(){
    return this.http.get<[Home]>(this.url + 'homes-for-rent.php');
  }

  getHomeForRentID(home: Home){
    return this.http.post(this.url + 'homes-for-rent-id.php', home);
  }
}
