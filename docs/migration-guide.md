# Migration Guide

Use this guide to move from scattered runtime repos to a public-safe source repo.

## Phase 1: Inventory

- List MCP servers and their owners.
- List skill hubs and aliases.
- List hooks and policies.
- Separate source files from installed runtime state.

## Phase 2: Sanitize

- Remove internal history.
- Replace real environment values with examples.
- Remove customer names, private hosts, task ledgers, and operational reports.
- Rewrite docs for public users.

## Phase 3: Validate

- Build all packages.
- Run tests and registry validators.
- Run secret scans.
- Review the first commit before pushing public.

## Phase 4: Publish

- Push the sanitized repository.
- Keep internal deployment scripts private unless they are generic.
- Accept community improvements through pull requests.
