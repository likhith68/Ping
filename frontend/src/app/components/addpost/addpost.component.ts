import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FeedComponent } from '../feed/feed.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostService } from '../post.service';
import { PostPayload } from '../PostPayload';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
})
export class AddpostComponent implements OnInit {
  constructor(
    private postService: PostService,
    public dialogRef: MatDialogRef<NavbarComponent>,
    private router: Router
  ) {}

  user: any;
  ngOnInit(): void {
    this.postService.getDetails().subscribe((res) => {
      this.user = res;
    });
  }

  model: PostPayload = {
    username: '',
    id: '',
    description: '',
    postImage: '',
    user: '',

    // {
    //   id: '',
    //   username: '',
    //   userImage: '',
    //   phoneNumber: '',
    //   password: '',
    //   email: '',
    // },
  };

  OnSubmit() {
    this.model.user = this.user;
    this.postService.addpost(this.model);
    this.onNoClick();
    location.reload();
    this.router.navigateByUrl('/feed');
    // console.log(this.model);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
