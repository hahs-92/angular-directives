import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MsgErr]',
})
export class MsgErrDirective implements OnInit {
  @Input() color: string = 'red';
  @Input() message: string = '';

  htmlElement: ElementRef<HTMLElement>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    console.log(el.nativeElement);

    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor() {
    //con renderer2
    this.renderer.setStyle(this.htmlElement.nativeElement, 'color', this.color);
    this.renderer.addClass(this.htmlElement.nativeElement, 'form-text');

    //con elementNative
    // this.htmlElement.nativeElement.style.color = this.color;
    // this.htmlElement.nativeElement.className = 'form-text';
  }

  setMessage() {
    //con renderer
    this.renderer.setProperty(
      this.htmlElement.nativeElement,
      'innerText',
      this.message
    );

    // this.htmlElement.nativeElement.innerText = this.message;
  }
}
