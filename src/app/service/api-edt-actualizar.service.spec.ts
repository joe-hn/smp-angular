import { TestBed } from '@angular/core/testing';

import { ApiEdtActualizarService } from './api-edt-actualizar.service';

describe('ApiEdtActualizarService', () => {
  let service: ApiEdtActualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEdtActualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
