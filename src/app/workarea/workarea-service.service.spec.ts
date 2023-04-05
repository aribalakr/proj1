import { TestBed } from '@angular/core/testing';

import { WorkareaServiceService } from './workarea-service.service';

describe('WorkareaServiceService', () => {
  let service: WorkareaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkareaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
