import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  //utilizamos el * en el html para envia la ref
  @Input() set customIf(valor: boolean) {
    if (valor) {
      this.viewContainer.createEmbeddedView(this.ref);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private ref: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {
    //templateRef es parecido al elementRef
    //esta un nivel mas arriba
  }
}
