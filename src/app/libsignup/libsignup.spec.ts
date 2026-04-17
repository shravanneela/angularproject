import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libsignup } from './libsignup';

describe('Libsignup', () => {
  let component: Libsignup;
  let fixture: ComponentFixture<Libsignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Libsignup],
    }).compileComponents();

    fixture = TestBed.createComponent(Libsignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
