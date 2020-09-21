import { TestBed } from '@angular/core/testing';

import { ApiMesService } from './api-mes.service';

describe('ApiMesService', () => {
  let service: ApiMesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
