import { TestBed } from '@angular/core/testing';

import { JokesManagementService } from './jokes-management.service';

describe('JokesManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokesManagementService = TestBed.get(JokesManagementService);
    expect(service).toBeTruthy();
  });
});
