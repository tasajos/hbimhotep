import { TestBed } from '@angular/core/testing';

import { SdeskService } from './sdesk.service';

describe('SdeskService', () => {
  let service: SdeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
