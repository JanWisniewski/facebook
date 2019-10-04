import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
      body: new FormControl()
    }
  );

  @Output()
  addPost = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const post = this.addPostForm.getRawValue();
    post.createdTime = Date().toString();
    post.id = uuid.v4();
    post.author = {};
    post.author.id = uuid.v4();
    post.author.name = faker.name.findName();
    post.author.avatarUrl = `http://placeskull.com/50/50/000000`;
    post.images = [];
    post.images.push(`http://placeskull.com/50/50/000000`);
    this.addPost.emit(post);
    this.addPostForm.reset();
  }
}
