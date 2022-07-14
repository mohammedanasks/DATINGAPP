import { TestBed } from '@angular/core/testing';

import { Servicess } from './servicess.service';

describe('ServicessService', () => {
  let service: Servicess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
