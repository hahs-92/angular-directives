import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErrDirective } from './directives/msg-err.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [MsgErrDirective, CustomIfDirective],
  exports: [MsgErrDirective, CustomIfDirective],
})
export class SharedModule {}
