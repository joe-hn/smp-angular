import { TestBed } from '@angular/core/testing';

import { ApiDireccionService } from './api-direccion.service';

describe('ApiDireccionService', () => {
  let service: ApiDireccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDireccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
