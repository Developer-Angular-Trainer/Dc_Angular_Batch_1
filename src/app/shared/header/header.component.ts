import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countFromService :any;
// in newer 14+ this syntax.......
 dataService = inject(DataServiceService);
 router = inject(Router);
  isLoggedIn :any;

// // Older version below 14 version
//  constructor(public dataService1 : DataServiceService,){

//  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
// Old Syntax
  this.dataService.countOfCart.subscribe({
    next:(data:any)=>{
      console.log(data,'New Syntax');
      this.countFromService = Number(data);

    }
  });
// New Syntax
  this.dataService.countOfCart.subscribe((data:any)=>{
    console.log(data,'Old Syntax');
  })

//  this.isLoggedIn = localStorage.getItem('alreadyLoggedIn');

 this.dataService.isLoggedIn.subscribe(data=>{
  this.isLoggedIn = data;
 })

}

gotToContactPage(){
  this.router.navigate(['contact']);
}
goToLogIn(){
  this.isLoggedIn = false;
  localStorage.clear();
  this.router.navigate(['login']);
}
}
