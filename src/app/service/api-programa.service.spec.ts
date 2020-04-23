import { TestBed } from '@angular/core/testing';

import { ApiProgramaService } from './api-programa.service';

describe('ApiProgramaService', () => {
  let service: ApiProgramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
