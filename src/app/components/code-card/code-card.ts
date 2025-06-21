import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Snippet } from '../../../interfaces';

@Component({
  selector: 'app-code-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-card.html',
  styleUrl: './code-card.scss'
})
export class CodeCard {
  @Input() snippet: Snippet | null = null;
  copied = false;

  HIGH_SIMILARITY = 0.45;
  MEDIUM_SIMILARITY = 0.35;
  LOW_SIMILARITY = 0.15;

  copyCode() {
    if (this.snippet?.code) {
      navigator.clipboard.writeText(this.snippet.code).then(() => {
        this.copied = true;
        setTimeout(() => this.copied = false, 2000);
      });
    }
  }
};