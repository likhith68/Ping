import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { EditUserPayload } from '../EditUserPayload';
import { PostPageComponent } from '../post-page/post-page.component';
import { PostService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  users: any;
  posts: any;
  id: number = 0;

  constructor(
    private postService: PostService,
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) {
    console.log(this.users);
  }

  ngOnInit(): void {
    this.postService.getDetails().subscribe((res) => {
      this.users = res;
    });

    this.posts = this.postService.loadPostsByName();
  }
  OnSubmit() {
    this.postService.Editdetails(this.userModel);
    this.postService.logout();
  }

  userModel: EditUserPayload = {
    id: '',
    username: '',
    email: '',
    phoneNumber: '',
    userImage: '',
    password: '',
  };

  openDialog(id: number) {
    this.setId(id);
    this.dialog.open(PostPageComponent);
  }

  setId(id: number) {
    this.id = id;
    this.localStorageService.store('postId', this.id);
  }
}

export interface UserPayload {
  id: string;
  username: string;
  email: string;
  userImage: string;
  phoneNumber: string;
  password: string;
}
