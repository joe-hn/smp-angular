import { TestBed } from '@angular/core/testing';

import { ApiFuentefinanciamientoService } from './api-fuentefinanciamiento.service';

describe('ApiFuentefinanciamientoService', () => {
  let service: ApiFuentefinanciamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFuentefinanciamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
