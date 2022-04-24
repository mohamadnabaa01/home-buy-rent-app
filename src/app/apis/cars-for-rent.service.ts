import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CarsForRent{
  id?: number,
  car_name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class CarsForRentService {
  private url='http://localhost/HomeCarBuyRentApp/';

  constructor(private http: HttpClient) { }

  getAllCarsForRent(){
    return this.http.get<[CarsForRent]>(this.url + 'cars-for-rent.php');
  }
}
