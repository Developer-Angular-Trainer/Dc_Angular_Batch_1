import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  count:number = 1;
// Dependancy Injection
  constructor(public dataService: DataServiceService){

  }
 sendDataToService(){
this.count = this.count +1;
  this.dataService.countOfCart.next(Number(this.count));

 }
}
