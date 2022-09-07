import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'ngx-webstorage';
import { PostService } from '../post.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
})
export class PostPageComponent implements OnInit {
  posts: any;
  id: number = 0;
  deleteId: number = 0;
  constructor(
    private postService: PostService,
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    private localStorage: LocalStorageService
  ) {
    // this.id = this.user.getId();
    // console.log(
    //   'this is the id of the post which should be displayed' + this.id
    // );

    this.postService.getPostByid().subscribe((res) => {
      this.posts = res;
    });
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(deleteid: number) {
    this.deleteId = deleteid;
    this.localStorage.store('deletePostId', this.deleteId);
    this.postService.deleteByid();
    this.onNoClick();
  }
}
