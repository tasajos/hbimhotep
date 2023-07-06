import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarusuarioComponent } from './navbarusuario.component';

describe('NavbarusuarioComponent', () => {
  let component: NavbarusuarioComponent;
  let fixture: ComponentFixture<NavbarusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarusuarioComponent]
    });
    fixture = TestBed.createComponent(NavbarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
