import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [CommentListComponent, CommentListItemComponent],
  exports: [CommentListComponent, CommentListItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CommentsModule { }
