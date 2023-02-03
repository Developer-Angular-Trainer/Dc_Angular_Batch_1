import { Component } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
title ="Title of Parent..";

// Step 3:
recieveDataFromCHild(value:any){
  console.log(value, 'Im in Parent');

 this.title = value;
}

}
