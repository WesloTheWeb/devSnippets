import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippet } from '../search-results/search-results';

@Component({
  selector: 'app-code-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-card.html',
  styleUrl: './code-card.scss'
})
export class CodeCard {
  @Input() snippet: CodeSnippet | null = null;
}