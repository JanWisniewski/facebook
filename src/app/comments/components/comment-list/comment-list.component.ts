import {Component, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments = [
    {
      id: '12423514',
      body: 'kjdbfs'
    },
    {
      id: '32r5324656',
      body: 'fsdgsdh'
    }
  ] as ICommentList;

  constructor() {
  }

  ngOnInit() {
  }

}
