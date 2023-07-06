import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaticketComponent } from './listaticket.component';

describe('ListaticketComponent', () => {
  let component: ListaticketComponent;
  let fixture: ComponentFixture<ListaticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaticketComponent]
    });
    fixture = TestBed.createComponent(ListaticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
