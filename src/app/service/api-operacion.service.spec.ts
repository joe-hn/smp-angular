import { TestBed } from '@angular/core/testing';

import { ApiOperacionService } from './api-operacion.service';

describe('ApiOperacionService', () => {
  let service: ApiOperacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOperacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
