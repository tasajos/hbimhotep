import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedeskComponent } from './servicedesk.component';

describe('ServicedeskComponent', () => {
  let component: ServicedeskComponent;
  let fixture: ComponentFixture<ServicedeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicedeskComponent]
    });
    fixture = TestBed.createComponent(ServicedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
