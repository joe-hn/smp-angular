import { TestBed } from '@angular/core/testing';

import { ApiPoaActividadService } from './api-poa-actividad.service';

describe('ApiPoaActividadService', () => {
  let service: ApiPoaActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPoaActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
