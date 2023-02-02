import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  userName = 'Welcome  ';
  userEmail = 'anpch@example.com';
  alphabets = ['a','b','c','d' ];
  personName = 'john wick';
  contactTypeSelectedValue :any;
  color:any;
  cost :number = 200;
  date = new Date();
  submit(){
    const user = 'aa';
    console.log(user);
    console.log(this.userName);
    console.log(this.userEmail);
  }

  changeColor(colorName:any){


this.color = colorName;

console.log(this.color);
  }
  doubleTheValue(){
    console.log('Double FUnction is calling for the Doubling the Value....');
  }
}
