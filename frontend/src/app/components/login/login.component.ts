import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginPayload } from '../LoginPayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  OnSubmit() {
    this.authService.login(this.loginModel);
  }

  loginModel: LoginPayload = {
    username: '',
    password: '',
  };
}
