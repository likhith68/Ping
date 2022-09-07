import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpostComponent } from '../addpost/addpost.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  auth(): Boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

  openAddPost() {
    this.dialog.open(AddpostComponent);
  }
}
