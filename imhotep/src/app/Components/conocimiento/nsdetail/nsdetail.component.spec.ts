import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsdetailComponent } from './nsdetail.component';

describe('NsdetailComponent', () => {
  let component: NsdetailComponent;
  let fixture: ComponentFixture<NsdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NsdetailComponent]
    });
    fixture = TestBed.createComponent(NsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
