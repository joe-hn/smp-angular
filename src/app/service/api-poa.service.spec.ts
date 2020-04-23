import { TestBed } from '@angular/core/testing';

import { ApiPoaService } from './api-poa.service';

describe('ApiPoaService', () => {
  let service: ApiPoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
