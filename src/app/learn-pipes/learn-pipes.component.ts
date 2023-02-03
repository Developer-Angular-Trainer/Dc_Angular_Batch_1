import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-pipes',
  templateUrl: './learn-pipes.component.html',
  styleUrls: ['./learn-pipes.component.css']
})
export class LearnPipesComponent {

  personName = 'john wick';

  cost :number = 200;
  date = new Date();

}
