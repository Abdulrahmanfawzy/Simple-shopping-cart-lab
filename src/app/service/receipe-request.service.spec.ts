import { TestBed } from '@angular/core/testing';

import { ReceipeRequestService } from './receipe-request.service';

describe('ReceipeRequestService', () => {
  let service: ReceipeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
