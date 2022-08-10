import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterPayload } from '../RegisterPayload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterPayload = {
    username: '',
    phoneNumber: '',
    password: '',
    email: '',
  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  OnSubmit() {
    this.authService.register(this.registerModel);
  }
}
