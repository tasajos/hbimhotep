import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SispcComponent } from './sispc.component';

describe('SispcComponent', () => {
  let component: SispcComponent;
  let fixture: ComponentFixture<SispcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SispcComponent]
    });
    fixture = TestBed.createComponent(SispcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
