import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {
 endPointUrl = environment.apiUrl;
//  getting from localstorage
 token:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

 headers= new HttpHeaders().set('Token',  this.token)
  constructor(public http: HttpClient) { }

  getData(){
  return this.http.get(this.endPointUrl,{headers:this.headers});
  }

  getSingleUserData(id:any){
    return this.http.get(this.endPointUrl + '/'+ id);
  }

  saveDataToDataBase(data:any){
    return this.http.post(this.endPointUrl,data)
  }
}
