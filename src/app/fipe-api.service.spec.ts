import { TestBed, inject } from '@angular/core/testing';

import { FipeApiService } from './fipe-api.service';

describe('FipeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FipeApiService]
    });
  });

  it('should be created', inject([FipeApiService], (service: FipeApiService) => {
    expect(service).toBeTruthy();
  }));
});
