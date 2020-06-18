import { TestBed } from '@angular/core/testing';

import { ApiPeModificacionService } from './api-pe-modificacion.service';

describe('ApiPeModificacionService', () => {
  let service: ApiPeModificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPeModificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
