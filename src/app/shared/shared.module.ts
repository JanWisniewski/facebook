import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [HighlightDirective, MyDatePipe, ErrorMessageComponent, LoadingComponent],
  exports: [HighlightDirective, MyDatePipe, ErrorMessageComponent, LoadingComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
