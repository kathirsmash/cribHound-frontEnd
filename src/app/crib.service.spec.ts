import { TestBed } from '@angular/core/testing';

import { CribService } from './crib.service';

describe('CribService', () => {
  let service: CribService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CribService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
