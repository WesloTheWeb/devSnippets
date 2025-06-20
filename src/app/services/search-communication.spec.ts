import { TestBed } from '@angular/core/testing';
import { SearchCommunicationService } from './search-communication';

describe('SearchCommunication', () => {
  let service: SearchCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
