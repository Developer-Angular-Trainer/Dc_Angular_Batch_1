import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-directives',
  templateUrl: './learn-directives.component.html',
  styleUrls: ['./learn-directives.component.css']
})
export class LearnDirectivesComponent {
  color:any;
  contactTypeSelectedValue :any;
  alphabets = ['a','b','c','d' ];
  changeColor(colorName:any){


    this.color = colorName;

    console.log(this.color);
      }
}
