import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './components/addpost/addpost.component';
import { AuthGuard } from './components/auth.guard';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addpost', component: AddpostComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
