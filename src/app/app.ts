import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { SearchResults } from './components/search-results/search-results';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Search, SearchResults],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'devsnippets-frontend';
}