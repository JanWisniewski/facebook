import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnChanges {
  @Input() post: IPost = null;
  @Output() removePost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.post && change.post.firstChange) {
      this.post.comments = [];
    }
  }

  getPostUrl() {
    if (this.post) {
      return `/posts/${this.post.id}`;
    } else {
      return '';
    }
  }

  getPostAuthorAvatarUrl() {
    if (this.post && this.post.author) {
      return this.post.author.avatarUrl;
    } else {
      return '';
    }
  }

  onClick() {
    this.removePost.emit(this.post);
  }
}
