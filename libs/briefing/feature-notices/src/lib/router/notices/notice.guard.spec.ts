import { TestBed } from '@angular/core/testing';

import { NoticeGuard } from './notice.guard';

describe('LocationGuard', () => {
  let guard: NoticeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoticeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
