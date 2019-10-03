import { Component, OnInit } from '@angular/core';

import fakePosts from '../../../../fakes/fake-posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = fakePosts;

  constructor() { }

  ngOnInit() {
  }

}
