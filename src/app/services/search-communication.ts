import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCommunicationService {
  // Subject for emitting search queries
  private searchQuerySubject = new Subject<string>();
  
  // Observable that components can subscribe to
  searchQuery$ = this.searchQuerySubject.asObservable();

  constructor() { }

  // Method to emit a new search query
  performSearch(query: string) {
    this.searchQuerySubject.next(query);
  }

  // Method to clear search (optional)
  clearSearch() {
    this.searchQuerySubject.next('');
  }
}