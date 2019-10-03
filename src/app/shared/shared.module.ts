import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';



@NgModule({
  declarations: [HighlightDirective, MyDatePipe, ErrorMessageComponent],
  exports: [HighlightDirective, MyDatePipe, ErrorMessageComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
