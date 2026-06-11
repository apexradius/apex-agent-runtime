# Security Model

This repository is a reference implementation. It is not a sandbox.

## Assumptions

- Local hooks run with the same user privileges as the agent host.
- MCP servers can touch whatever their code and credentials allow.
- Skill files influence agent behavior but do not enforce access control.

## Required Controls

- Secret scanning before public release.
- Input validation on every MCP tool.
- No hardcoded tokens, private hostnames, or customer data in examples.
- Protected-path hooks for high-risk local directories.
- CI checks for registry consistency.

## Public Release Rule

Publish fresh sanitized history. Do not make an internal runtime repository public.
