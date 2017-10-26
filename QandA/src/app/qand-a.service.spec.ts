import { TestBed, inject } from '@angular/core/testing';

import { QandAService } from './qand-a.service';

describe('QandAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QandAService]
    });
  });

  it('should be created', inject([QandAService], (service: QandAService) => {
    expect(service).toBeTruthy();
  }));
});
