import { Component,inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCallsService } from '../services/http-calls.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users :any=[];
  httpService = inject(HttpCallsService);
  router = inject(Router);
  displayedColumns: string[] = ['Id', 'UserId', 'title','body' ];
  dataSource:any = [];
  showSpinner:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers();
  }
getUsers(){
  console.log('get users');
  this.showSpinner = true;

  // Old syntax
  // this.httpService.getData().subscribe((data:any)=>{
  //   this.showSpinner = false;
  //   console.log(data);
  //   this.users = data;
  //   this.dataSource = data;

  // },

  // (error)=>{
  //   console.error(error)
  // });
// new syntax
  this.httpService.getData().subscribe({
    next:(data)=>{
      this.showSpinner = false;
      console.log(data);
      this.users = data;
      this.dataSource = data;
    },error:(error)=>{
      console.error(error)
    }
  });

}

goToUserDetailsScreen(row:any){
  console.log(row);

this.router.navigate(['users',row.id])
}
}
