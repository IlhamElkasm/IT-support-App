import { TestBed } from '@angular/core/testing';

import { AllpanneService } from './allpanne.service';

describe('AllpanneService', () => {
  let service: AllpanneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllpanneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
