import { TestBed } from '@angular/core/testing';

import { ConectionApiService } from './conection-api.service';

describe('ConectionApiService', () => {
  let service: ConectionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
