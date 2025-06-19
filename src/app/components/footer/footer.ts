import { Component } from '@angular/core';
import { GITHUB_URL } from '../../config/appConstants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})

export class Footer {

  github = GITHUB_URL;

  footerDateTime(): string {
    const present = new Date().getFullYear();

    if (present !== 2025) {
      return `2025 - ${present}`
    } else {
      return `2025`
    };
  };
};
