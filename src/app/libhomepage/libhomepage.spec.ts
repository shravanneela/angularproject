import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libhomepage } from './libhomepage';

describe('Libhomepage', () => {
  let component: Libhomepage;
  let fixture: ComponentFixture<Libhomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Libhomepage],
    }).compileComponents();

    fixture = TestBed.createComponent(Libhomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
