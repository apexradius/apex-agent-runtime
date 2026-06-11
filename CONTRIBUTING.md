# Contributing

Contributions are welcome if they make agent runtimes safer, easier to validate, or easier to adapt.

## Good Contributions

- New MCP examples with small, typed tool surfaces.
- Hook examples that fail safely and explain their decisions.
- Skill registry validators and migration scripts.
- Documentation of real failure modes and the guardrail that caught them.
- Security improvements that reduce accidental secret or client-data exposure.

## Ground Rules

- Do not include secrets, private hostnames, customer names, task logs, or internal runbooks.
- Add tests or validators for behavior changes.
- Keep examples generic and portable.
- Prefer small pull requests with one clear concern.

## Local Checks

```bash
pnpm validate
pnpm scan:secrets
```

If `gitleaks` is not installed, install it from the official project or run an equivalent secret scan before opening a pull request.
