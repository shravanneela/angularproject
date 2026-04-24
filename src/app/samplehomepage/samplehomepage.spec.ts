import { ComponentFixture, TestBed } from '@angular/core/testing';

import{ Samplehomepage } from './samplehomepage';

describe('Samplehomepage', () => {
  let component: Samplehomepage;
  let fixture: ComponentFixture<Samplehomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Samplehomepage],
    }).compileComponents();

    fixture = TestBed.createComponent(Samplehomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
