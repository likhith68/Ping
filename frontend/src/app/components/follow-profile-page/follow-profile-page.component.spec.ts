import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowProfilePageComponent } from './follow-profile-page.component';

describe('FollowProfilePageComponent', () => {
  let component: FollowProfilePageComponent;
  let fixture: ComponentFixture<FollowProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
