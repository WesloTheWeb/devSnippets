import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SearchBar} from './components/searchBar/searchBar';
import { SearchResults } from './components/search-results/search-results';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SearchBar, SearchResults, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'devsnippets-frontend';
}