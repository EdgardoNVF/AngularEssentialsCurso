import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Petform } from './petform';

describe('Petform', () => {
  let component: Petform;
  let fixture: ComponentFixture<Petform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Petform],
    }).compileComponents();

    fixture = TestBed.createComponent(Petform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
