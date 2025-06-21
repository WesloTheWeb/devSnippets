import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Snippet } from '../../../interfaces';
import { CodeCard } from '../code-card/code-card';
import { SnippetService } from '../../services/snippet';
import { SearchCommunicationService } from '../../services/search-communication';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeCard],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss'
})
export class SearchResults implements OnInit, OnDestroy {
  results: Snippet[] = [];
  isLoading: boolean = false;
  
  sortBy: string = 'relevance';
  private searchSubscription?: Subscription;

  constructor(
    private snippetService: SnippetService,
    private searchService: SearchCommunicationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Subscribe to search queries
    this.searchSubscription = this.searchService.searchQuery$.subscribe(query => {
      if (query) {
        this.performSearch(query);
      } else {
        // Clear search - show all snippets or empty state
        this.showAllSnippets();
      }
    });

    // Don't load all snippets initially - wait for user to search
    // this.showAllSnippets();
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  performSearch(query: string) {
    this.isLoading = true;
    
    this.snippetService.quickSearch(query).subscribe({
      next: (searchResponse) => {
        console.log('Search results:', searchResponse);
        console.log('Number of snippets:', searchResponse.snippets.length);
        this.results = [...searchResponse.snippets]; // Create new array reference
        console.log('Results array updated:', this.results);
        console.log('First result title:', this.results[0]?.title);
        this.isLoading = false;
        this.cdr.detectChanges(); // Force Angular to update the view
      },
      error: (error) => {
        console.error('Search failed:', error);
        this.results = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  showAllSnippets() {
    this.isLoading = true;
    
    this.snippetService.getAllSnippets().subscribe({
      next: (snippets) => {
        this.results = snippets;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load snippets:', error);
        this.results = [];
        this.isLoading = false;
      }
    });
  }

  onSortChange() {
    console.log('Sorting by:', this.sortBy);
    // TODO: Implement sorting logic
  }
}