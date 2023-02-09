import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  countOfCart = new BehaviorSubject<any>(0);
  isLoggedIn = new BehaviorSubject<any>(false);
  constructor() { }

}
