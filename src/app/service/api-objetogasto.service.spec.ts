import { TestBed } from '@angular/core/testing';

import { ApiObjetogastoService } from './api-objetogasto.service';

describe('ApiObjetogastoService', () => {
  let service: ApiObjetogastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiObjetogastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
