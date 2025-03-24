import { TestBed } from '@angular/core/testing';

import { MictlansService } from './mictlans.service';

describe('MictlansService', () => {
  let service: MictlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MictlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
