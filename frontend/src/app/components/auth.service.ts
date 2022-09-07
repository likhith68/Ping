import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginPayload } from './LoginPayload';
import { RegisterPayload } from './RegisterPayload';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  register(RegisterPayload: RegisterPayload) {
    this.http
      .post('http://localhost:8080/users/signup', RegisterPayload)
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/login');
        },
        (err) => {
          this.router.navigateByUrl('/login');
        }
      );
  }

  login(loginPayload: LoginPayload) {
    this.http
      .post<JwtAuthResponse>('http://localhost:8080/users/login', loginPayload)
      .pipe(
        map((data) => {
          this.localStorageService.store(
            'authenticationToken',
            data.authenticationToken
          );
          this.localStorageService.store('username', data.username);
          return true;
        })
      )
      .subscribe(
        (res) => {
          console.log('login success');
          this.router.navigateByUrl('/feed');
        },
        (err) => {
          console.log('login Failed');
        }
      );
  }

  isAuthenticated(): Boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
    this.router.navigateByUrl('/login');
  }
}

export interface JwtAuthResponse {
  authenticationToken: string;
  username: string;
}
