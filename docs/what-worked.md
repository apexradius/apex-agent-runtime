# What Worked

These patterns held up in production-style agent work:

- **Tool-first operation:** if the agent can verify something with a tool, it should verify before answering.
- **Small MCP tools:** narrow, typed tools are easier for models to call correctly.
- **Skill hubs:** grouping related procedures avoids a huge flat skill list.
- **Fresh public exports:** sanitized first commits are safer than cleaning old history.
- **Protected-path hooks:** local guardrails catch accidental writes before they become cleanup work.
- **Secret scans on every release:** treat scans as a gate, not a periodic audit.

## What Did Not Work

- Raw installed runtime directories as source of truth.
- Long skill descriptions that consume prompt budget.
- Hidden local backups in public candidates.
- One-off MCP servers with duplicated logging, result, and health patterns.
