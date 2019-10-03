import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPostList} from '../../shared/interfaces/post-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    const url = 'assets/fake-posts.json';
    return this.http.get<IPostList>(url).toPromise();
  }
}
