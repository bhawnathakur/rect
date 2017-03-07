    import { Directive, ElementRef, Input,HostListener } from '@angular/core';
    @Directive({ selector: '[myHighlight]' })
    export class HighlightDirective {
        constructor(el: ElementRef) {
          
        }
         @HostListener('mouseenter') onMouseEnter() {
    alert("hiddddddddddd");
  }
  @HostListener('mouseleave') onMouseLeave() {
    alert("not hi)");
  }
    }