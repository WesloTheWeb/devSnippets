import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Snippet,
  SnippetCreate,
  SnippetUpdate,
  SearchRequest,
  SearchResponse
} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // ? CREATE - Add a new snippet
  createSnippet(snippet: SnippetCreate): Observable<Snippet> {
    return this.http.post<Snippet>(`${this.apiUrl}/snippets`, snippet);
  }

  // ? READ - Get all snippets (with pagination)
  getAllSnippets(skip: number = 0, limit: number = 100): Observable<Snippet[]> {
    // HttpParams is Angular's way to handle query parameters
    const params = new HttpParams()
      .set('skip', skip.toString())
      .set('limit', limit.toString());

    return this.http.get<Snippet[]>(`${this.apiUrl}/snippets`, { params });
  }

  // ? READ - Get specific snippet by ID
  getSnippet(id: number): Observable<Snippet> {
    return this.http.get<Snippet>(`${this.apiUrl}/snippets/${id}`);
  }

  // ? UPDATE - Update existing snippet
  updateSnippet(id: number, snippet: SnippetUpdate): Observable<Snippet> {
    return this.http.put<Snippet>(`${this.apiUrl}/snippets/${id}`, snippet);
  }

  // ? DELETE - Remove snippet
  deleteSnippet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/snippets/${id}`);
  }

  // ? SEARCH - Semantic search through snippets
  searchSnippets(searchRequest: SearchRequest): Observable<SearchResponse> {
    return this.http.post<SearchResponse>(`${this.apiUrl}/search`, searchRequest);
  }

  // ? UTILITY - Get available programming languages
  getAvailableLanguages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/languages`);
  }

  // ? CONVENIENCE - Quick search with just a query string
  quickSearch(query: string, limit: number = 10): Observable<SearchResponse> {
    const searchRequest: SearchRequest = { query, limit };
    return this.searchSnippets(searchRequest);
  }
};

// TODO - Review each, get used to Angular dependencies