import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SearchBar} from './components/searchBar/searchBar';
import { SearchResults } from './components/search-results/search-results';
import { Footer } from "./components/footer/footer";
import { SwitchTabs } from './components/switch-tabs/switch-tabs';
import { UserInputSnippet } from './components/user-input-snippet/user-input-snippet';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,        // NEW: Needed for *ngIf directive
    RouterOutlet, 
    Header, 
    SwitchTabs, 
    SearchBar, 
    SearchResults, 
    Footer,
    UserInputSnippet     // NEW: Import the add snippet component
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'devsnippets-frontend';
  
  // NEW: Track which tab is currently active (starts with 'search')
  activeTab: 'search' | 'add' = 'search';

  // NEW: Handle tab changes from the switch-tabs component
  onTabChanged(tab: 'search' | 'add') {
    this.activeTab = tab;
    console.log('Switched to tab:', tab);
  }
}