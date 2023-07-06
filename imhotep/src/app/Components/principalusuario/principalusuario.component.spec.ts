import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalusuarioComponent } from './principalusuario.component';

describe('PrincipalusuarioComponent', () => {
  let component: PrincipalusuarioComponent;
  let fixture: ComponentFixture<PrincipalusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalusuarioComponent]
    });
    fixture = TestBed.createComponent(PrincipalusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
