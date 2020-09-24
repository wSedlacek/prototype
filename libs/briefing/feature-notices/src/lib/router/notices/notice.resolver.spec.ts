import { TestBed } from '@angular/core/testing';

import { NoticeResolver } from './notice.resolver';

describe('LocationResolver', () => {
  let service: NoticeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
