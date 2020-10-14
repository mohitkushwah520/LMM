import { TestBed } from '@angular/core/testing';

import { OurworkService } from './ourwork.service';

describe('OurworkService', () => {
  let service: OurworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
