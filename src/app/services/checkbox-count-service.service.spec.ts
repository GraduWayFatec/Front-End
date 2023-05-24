import { TestBed } from '@angular/core/testing';

import { CheckboxCountServiceService } from './checkbox-count-service.service';

describe('CheckboxCountServiceService', () => {
  let service: CheckboxCountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckboxCountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
