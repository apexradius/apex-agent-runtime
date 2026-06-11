# Security Policy

## Reporting

Please report security issues privately through GitHub Security Advisories for this repository.

## Scope

In scope:

- Example MCP server vulnerabilities.
- Hook examples that fail open unexpectedly.
- Registry validator gaps that allow unsafe metadata.
- Documentation that could encourage unsafe secret handling.

Out of scope:

- Private Apex Radius infrastructure.
- Attempts to access internal services, accounts, or customer data.

## Design Principles

- No hardcoded secrets.
- Validate all tool inputs at the boundary.
- Keep public examples generic.
- Treat local hooks as guardrails, not as a complete sandbox.
- Publish from clean source history only.
