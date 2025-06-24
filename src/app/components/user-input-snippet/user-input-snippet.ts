import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SnippetService } from '../../services/snippet';
import { SnippetCreate } from '../../../interfaces';
import { Banners } from '../banners/banners';

@Component({
  selector: 'app-user-input-snippet',
  standalone: true,
  imports: [CommonModule, FormsModule, Banners],
  templateUrl: './user-input-snippet.html',
  styleUrl: './user-input-snippet.scss'
})
export class UserInputSnippet {
  @ViewChild('snippetForm') snippetForm!: NgForm;

  snippet: SnippetCreate = {
    title: '',
    description: '',
    code: '',
    language: '',
    tags: []
  };

  tagsInput: string = '';
  isSubmitting: boolean = false;
  showSuccessBanner: boolean = false;
  successMessage: string = '';

  constructor(private snippetService: SnippetService) { }

  clearForm() {
    this.snippet = {
      title: '',
      description: '',
      code: '',
      language: '',
      tags: []
    };
    this.tagsInput = '';
    this.snippetForm.resetForm();
    this.showSuccessBanner = false;
  };

  onSubmit() {
    if (this.isSubmitting) return;

    this.snippet.tags = this.tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    this.isSubmitting = true;

    this.snippetService.createSnippet(this.snippet).subscribe({
      next: (createdSnippet) => {
        console.log('Snippet created successfully:', createdSnippet);
        this.resetForm(); // This will now reset form validation too
        this.isSubmitting = false;
        this.successMessage = `"${createdSnippet.title}" has been added successfully!`;
        this.showSuccessBanner = true;

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        setTimeout(() => {
          this.showSuccessBanner = false;
        }, 4000);
      },
      error: (error) => {
        console.error('Error creating snippet:', error);
        this.isSubmitting = false;
      }
    });
  }

  private resetForm() {
    // Reset the data
    this.snippet = {
      title: '',
      description: '',
      code: '',
      language: '',
      tags: []
    };
    this.tagsInput = '';
    this.snippetForm.resetForm();
  }
}