import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientoComponent } from './conocimiento.component';

describe('ConocimientoComponent', () => {
  let component: ConocimientoComponent;
  let fixture: ComponentFixture<ConocimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConocimientoComponent]
    });
    fixture = TestBed.createComponent(ConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
