import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErrDirective } from './directives/msg-err.directive';

@NgModule({
  declarations: [MsgErrDirective],
  exports: [MsgErrDirective],
})
export class SharedModule {}
