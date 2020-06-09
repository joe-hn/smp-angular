import { TestBed } from '@angular/core/testing';

import { ApiXlsxService } from './api-xlsx.service';

describe('ApiXlsxService', () => {
  let service: ApiXlsxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiXlsxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
