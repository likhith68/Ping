import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { EditUserPayload } from './EditUserPayload';
import { PostPayload } from './PostPayload';
// import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPayload } from './UserPayload';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  user: any;

  loadPosts(): Observable<Array<PostPayload>> {
    return this.http.get<Array<PostPayload>>('http://localhost:8080/posts/all');
  }

  loadPostsReverse(): Observable<Array<PostPayload>> {
    return this.http.get<Array<PostPayload>>(
      'http://localhost:8080/posts/allreverse'
    );
  }

  loadPostsByName(): Observable<Array<PostPayload>> {
    let name = this.localStorageService.retrieve('username');
    let url = 'http://localhost:8080/posts/all/' + name;
    return this.http.get<Array<PostPayload>>(url);
  }

  loadPostsByNameYo(name: String): Observable<Array<PostPayload>> {
    // let name = this.localStorageService.retrieve('username');
    let url = 'http://localhost:8080/posts/all/' + name;
    return this.http.get<Array<PostPayload>>(url);
  }

  addpost(postPayload: PostPayload) {
    console.log(postPayload);
    return this.http
      .post('http://localhost:8080/posts/addpost', postPayload)
      .subscribe(
        (res) => {
          console.log('Posted');
          this.router.navigateByUrl('/feed');
        },
        (err) => {
          console.log('Could not post', err);
        }
      );
  }

  getDetails(): Observable<Array<UserPayload>> {
    let name = this.localStorageService.retrieve('username');
    let url = 'http://localhost:8080/users/userdetails/' + name;
    return this.http.get<Array<UserPayload>>(url);
  }

  Editdetails(EditPayload: EditUserPayload) {
    this.http
      .put('http://localhost:8080/users/editdetails', EditPayload)
      .subscribe(
        (res) => {
          alert('Updated Successfully');
          this.router.navigateByUrl('/feed');
        },
        (err) => {
          this.router.navigateByUrl('/feed');
        }
      );
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
    this.router.navigateByUrl('/login');
  }

  getPostByid() {
    let id = this.localStorageService.retrieve('postId');
    let url = 'http://localhost:8080/posts/get/' + id;
    return this.http.get<Array<UserPayload>>(url);
  }

  deleteByid() {
    let id = this.localStorageService.retrieve('postId');
    let url = 'http://localhost:8080/posts/deletepost/' + id;
    console.log(url);
    console.log(id);
    console.log('DeletedPost');
    this.http.delete<PostPayload>(url).subscribe(
      (res) => {
        console.log('Deleted');
        location.reload();
        // this.router.navigateByUrl('/feed');
      },
      (err) => {
        console.log(err);
        // this.router.navigateByUrl('/feed');
        location.reload();
      }
    );
  }
}
