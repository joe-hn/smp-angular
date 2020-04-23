import { TestBed } from '@angular/core/testing';

import { ApiAnioService } from './api-anio.service';

describe('ApiAnioService', () => {
  let service: ApiAnioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAnioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
