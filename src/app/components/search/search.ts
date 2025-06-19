import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  searchQuery: string = '';

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // Add your search logic here
  }
}