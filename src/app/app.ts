import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Search],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'devsnippets-frontend';
}