import { TestBed } from '@angular/core/testing';

import { ApiCargoService } from './api-cargo.service';

describe('ApiCargoService', () => {
  let service: ApiCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
