import { TestBed } from '@angular/core/testing';

import { PersonResolver } from './person.resolver';

describe('PersonResolverService', () => {
  let service: PersonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
