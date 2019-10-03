import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post = null;

  constructor() { }

  ngOnInit() {
  }

  getPostUrl() {
    return `/posts/${this.post.id}`;
  }

  getPostAuthorAvatarUrl() {
    return this.post.author.avatarUrl;
  }
}
