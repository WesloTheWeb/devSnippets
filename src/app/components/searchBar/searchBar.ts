import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchCommunicationService } from '../../services/search-communication';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './SearchBar.html',
  styleUrl: './SearchBar.scss'
})
export class SearchBar {
  searchQuery: string = '';

  constructor(private searchService: SearchCommunicationService) { }

  onSearch() {
    if (this.searchQuery.trim()) {
      // Only search if there's actual content
      this.searchService.performSearch(this.searchQuery.trim());
    } else {
      // Clear search if empty
      this.searchService.clearSearch();
    }
  }

}