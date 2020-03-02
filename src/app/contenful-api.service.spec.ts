import { TestBed, inject } from '@angular/core/testing';

import { ContenfulApiService } from './contenful-api.service';

describe('ContenfulApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenfulApiService]
    });
  });

  it('should be created', inject([ContenfulApiService], (service: ContenfulApiService) => {
    expect(service).toBeTruthy();
  }));
});
