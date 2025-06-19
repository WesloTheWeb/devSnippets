import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeCard } from '../code-card/code-card';

// Interface for code snippet (you can move this to a shared models folder)
export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  tags: string[];
  similarity?: number;
  createdAt?: Date;
}

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