import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banners.html',
  styleUrl: './banners.scss'
})
export class Banners {
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() variant: 'static' | 'usercard' = 'static';
  @Input() message: string = '';
}