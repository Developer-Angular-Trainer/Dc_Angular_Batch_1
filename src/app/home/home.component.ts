import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  dataService = inject(DataServiceService);

ngOnInit(): void {
    console.log('Home COmponent is intilized');
    // I have loggedin so please update the isLoggedIn value to make logout button visible/hide
    this.dataService.isLoggedIn.next(true);
    // SetInterval
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log('Home COmponent is destroyed');
  // clearInterval;
}

}
