import { TestBed } from '@angular/core/testing';

import { ApiPoaDetalleService } from './api-poa-detalle.service';

describe('ApiPoaDetalleService', () => {
  let service: ApiPoaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPoaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
