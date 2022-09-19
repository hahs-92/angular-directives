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
  _color: string = 'red';
  _message: string = 'Mensage por defecto';

  _valid: boolean = true;

  //@Input() color: string = 'red';
  @Input() set color(valor: string) {
    console.log(valor);
    this._color = valor;
    this.setColor();
  }

  @Input() set message(valor: string) {
    this._message = valor;
    this.setMessage();
  }

  @Input() set valid(valor: boolean) {
    this._valid = valor;
    this.setShow();
  }

  htmlElement: ElementRef<HTMLElement>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
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
    this.renderer.setStyle(
      this.htmlElement.nativeElement,
      'color',
      this._color
    );
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
      this._message
    );

    // this.htmlElement.nativeElement.innerText = this.message;
  }

  setShow() {
    this._valid
      ? this.renderer.setStyle(
          this.htmlElement.nativeElement,
          'display',
          'none'
        )
      : this.renderer.setStyle(
          this.htmlElement.nativeElement,
          'display',
          'block'
        );
  }
}
