import { TestBed } from '@angular/core/testing';

import { blogsService } from './blogs.service';

describe('BlogsService', () => {
  let service: blogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(blogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
