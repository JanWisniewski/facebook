import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;
  @ViewChild('dialog', {static: true}) dialog = null;


  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeCommentWithConfirmation(post) {
    this.dialog.show();
    this.dialog.__commentToRemove = post;
  }

  removeComment() {
    const id = this.dialog.__commentToRemove;
    const id1 = this.comments.indexOf(id);
    this.comments.splice(id1, 1);
    this.dialog.hide();
  }
}
