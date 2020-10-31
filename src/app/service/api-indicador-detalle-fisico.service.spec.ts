import { TestBed } from '@angular/core/testing';

import { ApiIndicadorDetalleFisicoService } from './api-indicador-detalle-fisico.service';

describe('ApiIndicadorDetalleFisicoService', () => {
  let service: ApiIndicadorDetalleFisicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIndicadorDetalleFisicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
