import { TestBed } from '@angular/core/testing';

import { EmployingDataService } from './employing-data.service';

describe('EmployingDataService', () => {
  let service: EmployingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
