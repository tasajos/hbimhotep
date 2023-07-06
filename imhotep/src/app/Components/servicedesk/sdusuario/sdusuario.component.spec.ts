import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdusuarioComponent } from './sdusuario.component';

describe('SdusuarioComponent', () => {
  let component: SdusuarioComponent;
  let fixture: ComponentFixture<SdusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdusuarioComponent]
    });
    fixture = TestBed.createComponent(SdusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
