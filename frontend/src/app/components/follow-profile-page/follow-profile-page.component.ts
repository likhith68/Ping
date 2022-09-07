import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-follow-profile-page',
  templateUrl: './follow-profile-page.component.html',
})
export class FollowProfilePageComponent implements OnInit {
  AllProfiles: any;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.AllProfiles = this.userService.getAll();
  }
}
