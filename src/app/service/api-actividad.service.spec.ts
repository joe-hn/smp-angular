import { TestBed } from '@angular/core/testing';

import { ApiActividadService } from './api-actividad.service';

describe('ApiActividadService', () => {
  let service: ApiActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
