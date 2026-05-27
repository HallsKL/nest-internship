import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ministers } from './ministers';

describe('Ministers', () => {
  let component: Ministers;
  let fixture: ComponentFixture<Ministers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ministers],
    }).compileComponents();

    fixture = TestBed.createComponent(Ministers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
