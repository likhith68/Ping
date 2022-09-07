import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './components/feed/feed.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { HttpClientInterceptor } from './components/http-client-interceptor';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PostPageComponent } from './components/post-page/post-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FollowProfilePageComponent } from './components/follow-profile-page/follow-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FeedComponent,
    AddpostComponent,
    UserDetailsComponent,
    EditprofileComponent,
    PostPageComponent,
    FollowProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2Webstorage.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
