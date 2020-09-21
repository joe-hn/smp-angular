import { TestBed } from '@angular/core/testing';

import { ApiReportesService } from './api-reportes.service';

describe('ApiReportesService', () => {
  let service: ApiReportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
