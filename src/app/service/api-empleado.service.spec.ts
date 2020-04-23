import { TestBed } from '@angular/core/testing';

import { ApiEmpleadoService } from './api-empleado.service';

describe('ApiEmpleadoService', () => {
  let service: ApiEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
