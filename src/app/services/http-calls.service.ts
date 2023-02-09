import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {
 endPointUrl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getData(){
  return this.http.get(this.endPointUrl);
  }
}
