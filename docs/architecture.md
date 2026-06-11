# Architecture

The runtime has three source surfaces:

1. **MCP packages** expose capabilities to model hosts.
2. **Skills** route work into repeatable procedures.
3. **Hooks** add local guardrails before tools act.

Installed host directories are deployment targets, not the source of truth. Keep the reviewed source in git, then sync into each host's expected layout.

## MCP Packages

Use a workspace:

- `packages/mcp-shared` for common result builders, health checks, logging, and policy helpers.
- One package per server.
- One narrow tool surface per real capability group.

## Skills

Use hub skills when many narrow skills share a doctrine. Keep the hub description short enough for routing. Put detailed procedures into mode files.

## Hooks

Write hooks as small programs with explicit inputs and outputs. A hook should either add context, allow, or block with a clear reason. Never rely on hooks as the only security boundary.
