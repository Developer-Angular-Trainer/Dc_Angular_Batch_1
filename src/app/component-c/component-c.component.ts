import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit, DoCheck, OnDestroy {
  constructor(){
    console.log('Constructor is called');

  }

  ngOnInit(): void {
    console.log('ngOninit is called');
  }
  ngDoCheck(): void {
    console.log('NgDoCheeck is called');
  }

  ngOnDestroy(): void {
    console.log('Destory is called');
  }

}
