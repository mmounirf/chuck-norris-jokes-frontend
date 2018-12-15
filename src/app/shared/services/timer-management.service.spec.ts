import { TestBed } from '@angular/core/testing';

import { TimerManagementService } from './timer-management.service';

describe('TimerManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerManagementService = TestBed.get(TimerManagementService);
    expect(service).toBeTruthy();
  });
});
