import { TestBed } from '@angular/core/testing';

import { ApiTipoDireccionService } from './api-tipo-direccion.service';

describe('ApiTipoDireccionService', () => {
  let service: ApiTipoDireccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTipoDireccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
