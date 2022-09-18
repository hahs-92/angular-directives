import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[MsgErr]',
})
export class MsgErrDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    console.log(el.nativeElement);

    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }
}
