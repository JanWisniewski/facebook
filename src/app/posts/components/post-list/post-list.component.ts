import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IPostList} from '../../../shared/interfaces/post-list.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;

  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addPost(post: IPost) {
    this.posts.unshift(post);
  }

  removePost() {
    const post = this.dialog.__postToRemove;
    const post1 = this.posts.indexOf(post);
    this.posts.splice(post1, 1);
    this.dialog.hide();
  }

  removePostWithConfirmation(post) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }
}
