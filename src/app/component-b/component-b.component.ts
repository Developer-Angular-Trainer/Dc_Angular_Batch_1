import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent {
  // Child Component....
  @Input() dataFromParent:any;
  // Step:1
  @Output() childToParent = new EventEmitter();

  titleOfChild = 'I m Child Title';


  sendToParent(){
 console.log(this.titleOfChild);
// Step2:

    this.childToParent.emit(this.titleOfChild);


  }

  /* For CHild to parent communication.
  Step:1 : We have to create the variable with event emitteer using @output and  new EventEmitter;
  step2: We have to emit the data what we want to pass to the parent Component via method...
  Stpe3: Inside parent Component.ts we have to create the function/method
   which is used to receive the data from child event emitter
   Step 4: We have to use the @output varibale name inside the parent component.html
    on Child directive and call the funcitom which has been created in step3
  */

}
