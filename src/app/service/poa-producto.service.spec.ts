import { TestBed } from '@angular/core/testing';

import { PoaProductoService } from './poa-producto.service';

describe('PoaProductoService', () => {
  let service: PoaProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoaProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
