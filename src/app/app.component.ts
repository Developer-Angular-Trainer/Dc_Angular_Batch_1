import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Title check....
  title = 'Angular_Training_Batch_One';

  constructor(public router : Router){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem('alreadyLoggedIn') === 'yes'){
      this.router.navigate(['/home'])

    }else{
    this.router.navigate(['/login']);}
  }
}
