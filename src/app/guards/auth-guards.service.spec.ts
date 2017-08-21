import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardsService } from './auth-guards.service';

describe('AuthGuardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardsService]
    });
  });

  it('should be created', inject([AuthGuardsService], (service: AuthGuardsService) => {
    expect(service).toBeTruthy();
  }));
});
