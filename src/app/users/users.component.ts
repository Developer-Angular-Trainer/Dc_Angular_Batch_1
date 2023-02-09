import { Component,inject, OnInit } from '@angular/core';
import { HttpCallsService } from '../services/http-calls.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users :any;
  httpService = inject(HttpCallsService);
  displayedColumns: string[] = ['Id', 'UserId', 'title','body' ];
  dataSource:any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getUsers();
  }
getUsers(){
  console.log('get users');
  this.httpService.getData().subscribe(data=>{console.log(data);
  this.users = data;
  this.dataSource = data;

  });

}
}
