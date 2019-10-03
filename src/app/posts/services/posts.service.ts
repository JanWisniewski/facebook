import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPostList} from '../../shared/interfaces/post-list.interface';
import {sortByOperator} from '../../shared/helpers/sorter.helper';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  async getPosts() {
    const url = environment.postsUrl;
    const response = await this.http.get<IPostList>(url).pipe(
      sortByOperator('createdTime')
    ).toPromise();
    return response;
  }
}
