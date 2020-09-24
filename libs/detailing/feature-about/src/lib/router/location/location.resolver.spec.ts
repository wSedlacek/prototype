import { TestBed } from '@angular/core/testing';

import { LocationResolver } from './location.resolver';

describe('LocationResolver', () => {
  let service: LocationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
