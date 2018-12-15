import { TestBed } from '@angular/core/testing';

import { JokesResolverService } from './jokes-resolver.service';

describe('JokesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokesResolverService = TestBed.get(JokesResolverService);
    expect(service).toBeTruthy();
  });
});
