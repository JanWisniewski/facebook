import { Component, OnInit } from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

  post: IPost = null;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setupPost();
  }

  getPostAuthorAvatarUrl() {
    return this.post.author.avatarUrl;
  }

  private async setupPost() {
    const postId = this.route.snapshot.params.postId;
    const post =  await this.postsService.getPostById(postId);

    if (!post) {
      return this.router.navigateByUrl('/not-found');
    }

    this.post = post;
  }
}
