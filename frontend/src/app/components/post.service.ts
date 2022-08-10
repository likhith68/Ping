import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostPayload } from './PostPayload';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private router: Router) {}

  loadPosts(): Observable<Array<PostPayload>> {
    return this.http.get<Array<PostPayload>>('http://localhost:8080/posts/all');
  }

  addpost(postPayload: PostPayload) {
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
}
