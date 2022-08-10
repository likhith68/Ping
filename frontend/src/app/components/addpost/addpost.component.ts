import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostPayload } from '../PostPayload';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
})
export class AddpostComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  model: PostPayload = {
    username: '',
    id: '',
    description: '',
    postImage: '',
  };

  OnSubmit() {
    this.postService.addpost(this.model);
    // console.log(this.model);
  }
}
