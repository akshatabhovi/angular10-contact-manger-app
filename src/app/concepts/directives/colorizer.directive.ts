import { Directive, ElementRef, Renderer2 } from '@angular/core';

// This is an attribute Directive
// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { // dependency Injection
    console.log('Inside Consturtor of ColorizerDirective');
    console.log('ElementRef' + this.elRef.nativeElement);

    // chaging color using JS
    const el = this.elRef.nativeElement;
    el.style.backgroundColor = 'red';
    el.style.color = 'blue';

    this.renderer.setStyle(el, 'background-color', 'yellow');
    this.renderer.setStyle(el, 'color', 'blue')
  }

}
