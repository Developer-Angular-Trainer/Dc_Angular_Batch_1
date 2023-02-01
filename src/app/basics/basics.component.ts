import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  userName = 'Welcome  ';
  userEmail = 'anpch@example.com';

  submit(){
    const user = 'aa';
    console.log(user);
    console.log(this.userName);
    console.log(this.userEmail);
  }
}
