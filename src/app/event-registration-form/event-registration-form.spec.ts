import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationForm } from './event-registration-form';

describe('EventRegistrationForm', () => {
  let component: EventRegistrationForm;
  let fixture: ComponentFixture<EventRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegistrationForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EventRegistrationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
