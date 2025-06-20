import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Snippet } from '../../../interfaces';
import { CodeCard } from '../code-card/code-card';
import { SnippetService } from '../../services/snippet';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeCard],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss'
})
export class SearchResults implements OnInit {
  @Input() results: Snippet[] = [];
  @Input() isLoading: boolean = false;

  sortBy: string = 'relevance';

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.testConnection();
  };

  testConnection() {
    this.isLoading = true;
    console.log('Testing connection to backend...');

    this.snippetService.getAllSnippets().subscribe({
      next: (snippets) => {
        console.log('✅ Connection successful! Received snippets:', snippets);
        this.results = snippets;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Connection failed:', error);
        this.isLoading = false;
      }
    });
  };

  onSortChange() {
    console.log('Sorting by:', this.sortBy);
  };
};