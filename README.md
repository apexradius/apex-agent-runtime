# Apex Agent Runtime

Public reference stack for the parts of our agent operating system that are useful outside Apex Radius:

- MCP server patterns and a small shared package.
- Skill hub layout, registry metadata, and validation.
- Local hook patterns for guardrails, reminders, and policy enforcement.
- CI and security gates that catch issues before a runtime install.

This repository is intentionally sanitized. It does not include internal task logs, client data, production hostnames, private policies, or secrets.

## Why this exists

We use agents as operators, not chat widgets. The useful pattern is a runtime layer:

1. MCP tools expose real capabilities through small, typed contracts.
2. Skills route broad requests into repeatable operating procedures.
3. Hooks add local safety rails before tools mutate files or touch risky surfaces.
4. CI keeps the source of truth cleaner than the installed runtime copies.

This repo shares the reusable shape so other teams can adapt it and improve it.

## Repository Map

```text
packages/
  mcp-shared/              Shared helpers for MCP servers
  example-mcp-server/      Runnable stdio MCP server example
skills/
  examples/                Public skill hub examples
  registry/                Example registry and alias manifest
hooks/
  source/                  Public hook examples
  policy-templates/        Example policy files
  installers/              Non-destructive installer example
docs/
  architecture.md
  migration-guide.md
  security-model.md
  what-worked.md
scripts/
  validate-registry.mjs
```

## Quick Start

```bash
corepack enable
pnpm install
pnpm validate
```

Run the example server:

```bash
pnpm --filter @apex-agent-runtime/example-mcp-server build
node packages/example-mcp-server/dist/index.js
```

The example is a stdio MCP server. Configure it in your host using the host's normal MCP server command configuration.

## What To Copy

Copy the ideas, not our exact names:

- Use a shared package for tool results, error shape, health checks, and logging.
- Keep tools small and typed at the boundary.
- Treat skill descriptions as routing metadata, not long documentation dumps.
- Keep installed hooks generated from reviewed source.
- Make secret scanning a default gate before publishing or syncing runtime artifacts.

## What Not To Copy

Do not publish your raw installed runtime directories. Export a sanitized source repo with fresh history. Installed runtime state tends to accumulate machine paths, stale backups, and operational context that does not belong in public.

## License

Apache-2.0. Use it, fork it, and send improvements back.
