import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2nuevoComponent } from './c2nuevo.component';

describe('C2nuevoComponent', () => {
  let component: C2nuevoComponent;
  let fixture: ComponentFixture<C2nuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C2nuevoComponent]
    });
    fixture = TestBed.createComponent(C2nuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
