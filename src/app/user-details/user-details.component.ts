import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user-model';
import { HttpCallsService } from '../services/http-calls.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  httpService = inject(HttpCallsService);
  constructor(public route: ActivatedRoute){

  }
  singleUserData : any;
ngOnInit(): void {

  const id =this.route.snapshot.paramMap.get('id');
  console.log(id);

    this.httpService.getSingleUserData(id).subscribe((data:any)=>{

      this.singleUserData = data;
      console.log(data);})
}
}
