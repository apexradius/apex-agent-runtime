---
name: repo-quality-hub
user-invocable: true
description: Routes repository cleanup, pre-merge quality gates, and public-release checks. Use before merging, publishing, or making a repository public.
version: 0.1.0
---

# Repo Quality Hub

Use this skill when a repository needs to become mergeable, releasable, or public.

## Doctrine

- Verify the current branch and upstream before changing anything.
- Treat secret scanning as a release gate, not an optional audit.
- Keep source of truth separate from installed runtime copies.
- Prefer fresh public history over making internal repositories public.
- Report residual risk explicitly.

## Modes

| Mode | When to use it | File |
| --- | --- | --- |
| public-release-check | Before publishing a repository publicly | `modes/public-release-check.md` |
| pre-merge-check | Before merging a branch or pull request | `modes/pre-merge-check.md` |
