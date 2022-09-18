import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[MsgErr]',
})
export class MsgErrDirective implements OnInit, OnChanges {
  //@Input() color: string = 'red';
  @Input() set color(valor: string) {
    this.renderer.setStyle(this.htmlElement.nativeElement, 'color', valor);
  }

  @Input() message: string = '';

  htmlElement: ElementRef<HTMLElement>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // this.setColor();
    this.setMessage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['message']) {
    //   this.message = changes['message'].currentValue;
    //   this.renderer.setProperty(
    //     this.htmlElement.nativeElement,
    //     'innerText',
    //     this.message
    //   );
    // }
    // if (changes['color']) {
    //   this.renderer.setStyle(
    //     this.htmlElement.nativeElement,
    //     'color',
    //     this.color
    //   );
    // }
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
