import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    { id: '1', body: 'abc'},
    { id: '2', body: 'abcd'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
