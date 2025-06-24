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
  selectedFileName: string = '';


  constructor(private snippetService: SnippetService) { }

  // ADD THIS METHOD
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;

      // Auto-detect language from file extension
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension && !this.snippet.language) {
        this.snippet.language = this.getLanguageFromExtension(extension);
      }

      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        this.snippet.code = e.target?.result as string;
      };
      reader.readAsText(file);
    }
  }

  // ADD THIS METHOD
  private getLanguageFromExtension(extension: string): string {
    const extensionMap: { [key: string]: string } = {
      'js': 'javascript',
      'ts': 'typescript',
      'py': 'python',
      'java': 'java',
      'cs': 'csharp',
      'cpp': 'cpp',
      'c': 'cpp',
      'h': 'cpp',
      'html': 'html',
      'css': 'css',
      'sql': 'sql',
      'php': 'php',
      'rb': 'ruby',
      'go': 'go',
      'rs': 'rust',
      'json': 'javascript',
      'xml': 'html',
      'yml': 'other',
      'yaml': 'other'
    };
    return extensionMap[extension] || 'other';
  }

  clearForm() {
    this.snippet = {
      title: '',
      description: '',
      code: '',
      language: '',
      tags: []
    };
    this.tagsInput = '';
    this.selectedFileName = '';
    this.snippetForm.resetForm();
    this.showSuccessBanner = false;
  };

  clearFile() {
    this.selectedFileName = '';
    this.snippet.code = '';
    // Clear the file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

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