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
}