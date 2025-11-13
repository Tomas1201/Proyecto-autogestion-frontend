import { TestBed } from '@angular/core/testing';

import { BackConnection } from './back-connection.service';

describe('BackConection', () => {
  let service: BackConnection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackConnection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
