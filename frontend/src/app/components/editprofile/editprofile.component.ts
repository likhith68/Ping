import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { EditUserPayload } from '../EditUserPayload';
import { PostService } from '../post.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  users: any;
  constructor(
    private postService: PostService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.postService.getDetails().subscribe((res) => {
      this.users = res;
    });
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
}
