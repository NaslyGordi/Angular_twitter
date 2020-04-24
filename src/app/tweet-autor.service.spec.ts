import { TestBed } from '@angular/core/testing';

import { TweetAutorService } from './tweet-autor.service';

describe('TweetAutorService', () => {
  let service: TweetAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
