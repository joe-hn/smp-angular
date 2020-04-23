import { TestBed } from '@angular/core/testing';

import { ApiComponenteService } from './api-componente.service';

describe('ApiComponenteService', () => {
  let service: ApiComponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiComponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
