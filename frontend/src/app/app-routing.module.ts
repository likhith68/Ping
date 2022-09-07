import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './components/addpost/addpost.component';
import { AuthGuard } from './components/auth.guard';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { FeedComponent } from './components/feed/feed.component';
import { FollowProfilePageComponent } from './components/follow-profile-page/follow-profile-page.component';
import { LoginComponent } from './components/login/login.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'addpost', component: AddpostComponent, canActivate: [AuthGuard] },
  {
    path: 'userdetails',
    component: UserDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editprofile',
    component: EditprofileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'postPage',
    component: PostPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'followProfiles',
    component: FollowProfilePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
