import { TestBed } from '@angular/core/testing';

import { ApiPoaProductoService } from './api-poa-producto.service';

describe('ApiPoaProductoService', () => {
  let service: ApiPoaProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPoaProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
