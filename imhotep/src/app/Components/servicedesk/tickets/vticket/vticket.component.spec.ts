import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VticketComponent } from './vticket.component';

describe('VticketComponent', () => {
  let component: VticketComponent;
  let fixture: ComponentFixture<VticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VticketComponent]
    });
    fixture = TestBed.createComponent(VticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
