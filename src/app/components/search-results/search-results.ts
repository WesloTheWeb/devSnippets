import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeSnippet } from '../../../interfaces';
import { CodeCard } from '../code-card/code-card';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeCard],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss'
})
export class SearchResults {
  @Input() results: CodeSnippet[] = [];
  @Input() isLoading: boolean = false;
  
  sortBy: string = 'relevance';

  onSortChange() {
    // TODO  Implement sorting logic here
    console.log('Sorting by:', this.sortBy);
    // TODO emit an event to parent component to handle sorting
  }
}