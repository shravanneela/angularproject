import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormPractice } from './profile-form-practice';

describe('ProfileFormPractice', () => {
  let component: ProfileFormPractice;
  let fixture: ComponentFixture<ProfileFormPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFormPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
