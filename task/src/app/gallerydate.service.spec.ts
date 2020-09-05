import { TestBed } from '@angular/core/testing';

import { GallerydateService } from './gallerydate.service';

describe('GallerydateService', () => {
  let service: GallerydateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallerydateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
