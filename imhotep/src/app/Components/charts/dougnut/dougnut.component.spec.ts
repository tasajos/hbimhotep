import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DougnutComponent } from './dougnut.component';

describe('DougnutComponent', () => {
  let component: DougnutComponent;
  let fixture: ComponentFixture<DougnutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DougnutComponent]
    });
    fixture = TestBed.createComponent(DougnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
