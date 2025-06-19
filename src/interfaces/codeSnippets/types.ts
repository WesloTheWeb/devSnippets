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
