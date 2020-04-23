import { TestBed } from '@angular/core/testing';

import { ApiIndicadorService } from './api-indicador.service';

describe('ApiIndicadorService', () => {
  let service: ApiIndicadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIndicadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
