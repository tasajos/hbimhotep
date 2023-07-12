import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NscursoComponent } from './nscurso.component';

describe('NscursoComponent', () => {
  let component: NscursoComponent;
  let fixture: ComponentFixture<NscursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NscursoComponent]
    });
    fixture = TestBed.createComponent(NscursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
