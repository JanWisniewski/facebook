import {Component, Input, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

}
