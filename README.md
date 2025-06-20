# Dev Snippets: Frontend
Repository for the front-end portion of Dev Snippets. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

For the accompanying backend, [devSnippets Backend Repository](https://github.com/WesloTheWeb/devSnippets-backend)

NOTE: To run you must currently have the backend running and frontend. I have not hosted this live yet.

## Features
This is an Angular frontend for a semantic code search application where users can:
1. Upload code files/snippets
2. Search using natural language
3. View semantically similar results
4. Manage their code snippets (CRUD operations)

### Tech Stack (Frontend)
- **Angular 18** (latest)
- **TypeScript** (Angular 2+ is already written in TypeScript but for anyone non-technical, this is TypeScript)
- **RxJS** (async operations)
- **Component-scoped CSS**

### Tech Stack (Backend)
[devSnippets Backend](https://github.com/WesloTheWeb/devSnippets-backend)
- **PostgreSQL** 
- **Python**
- **FastAPI** (Python)
- **Vector DB** (Weaviate/Pinecone)

Backend-focus goals:
- SQL schema design, query tuning, and migrations in Postgres
- Explore knowledge graph + vector databases like Weaviate/Pinecone
(This project will be the semantic search of this graph database)

Dev-ops Focus goals:
- Docker, Kubernetes, or ECS
- IaC (Infrastructure As Code) (Terraform, Pulumi, Cloud Build, GitHub Actions)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
