import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostPayload } from '../PostPayload';
import { SlicePipe } from '@angular/common';
import { EditUserPayload } from '../EditUserPayload';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  // posts!: PostPayload[];
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // this.postService.loadPostsReverse().subscribe((res) => {
    //   this.posts = res;
    // });
    this.posts = this.postService.loadPostsReverse();
    console.log(this.posts);
  }
}
