import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import uuid from 'uuid';
import {IComment} from '../../../shared/interfaces/comment.interface';
import faker from 'faker';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null
  } as IComment;

  @Output() addComment = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(addForm) {
    const comment = Object.assign({}, this.comment);
    comment.id = uuid.v4();
    comment.createdTime = new Date().toString();
    comment.author.id = uuid.v4();
    comment.author.name = faker.name.findName();
    comment.author.avatarUrl = `http://placeskull.com/50/50/000000`;
    this.addComment.emit(comment);
    addForm.reset();
  }

}
