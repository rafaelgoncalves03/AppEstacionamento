import { TestBed } from '@angular/core/testing';

import { MeuserviceService } from './meuservice.service';

describe('MeuserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeuserviceService = TestBed.get(MeuserviceService);
    expect(service).toBeTruthy();
  });
});
