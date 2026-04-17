import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libsignin } from './libsignin';

describe('Libsignin', () => {
  let component: Libsignin;
  let fixture: ComponentFixture<Libsignin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Libsignin],
    }).compileComponents();

    fixture = TestBed.createComponent(Libsignin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
