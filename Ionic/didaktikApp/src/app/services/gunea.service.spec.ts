import { TestBed } from '@angular/core/testing';

import { GuneaService } from './gunea.service';

describe('GuneaService', () => {
  let service: GuneaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuneaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
