import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import {SharedModule} from '../shared/shared.module';
import { CommentAddFormComponent } from './components/comment-add-form/comment-add-form.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CommentListComponent, CommentListItemComponent, CommentAddFormComponent],
  exports: [CommentListComponent, CommentListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CommentsModule { }
