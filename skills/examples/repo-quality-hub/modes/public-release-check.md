# Public Release Check

## Steps

1. Create a fresh export repository.
2. Remove internal history, machine paths, private hostnames, client names, task logs, and secrets.
3. Replace real configs with `.env.example` or policy templates.
4. Run build, tests, lint, and secret scans.
5. Publish only after the first commit is clean.

## Red Flags

- Existing git history from an internal repo.
- Backups, generated caches, or old local runtime state.
- Hardcoded private hosts, usernames, customer names, or tokens.
- Documentation that says "ask the user to run" when the agent can run it.
