import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessmakerComponent } from './processmaker.component';

describe('ProcessmakerComponent', () => {
  let component: ProcessmakerComponent;
  let fixture: ComponentFixture<ProcessmakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessmakerComponent]
    });
    fixture = TestBed.createComponent(ProcessmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
