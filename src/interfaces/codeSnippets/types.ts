export interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  tags: string[];
  similarity?: number;
  createdAt?: Date;
};

// ? REST API interface types
export interface Snippet {
  id: number;
  title: string;
  description?: string;
  code: string;
  language: string;
  tags: string[];
  created_at: Date;
  similarity?: number; 
};

export interface SnippetCreate {
  title: string;
  description?: string;
  code: string;
  language: string;
  tags: string[];
};

export interface SnippetUpdate {
  title?: string;
  description?: string;
  code?: string;
  language?: string;
  tags?: string[];
};

export interface SearchRequest {
  query: string;
  limit?: number;
};

export interface SearchResponse {
  snippets: Snippet[];
  total_count: number;
  query: string;
};