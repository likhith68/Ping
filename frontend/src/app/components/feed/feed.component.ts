import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostPayload } from '../PostPayload';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  posts: any;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.loadPosts();
  }
}
