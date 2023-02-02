import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(public ele:ElementRef) {

this.ele.nativeElement.style.background = 'yellow';

  }

}
