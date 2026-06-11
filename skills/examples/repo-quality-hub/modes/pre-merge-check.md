# Pre-Merge Check

## Steps

1. Fetch and inspect branch divergence.
2. Read the pull request and changed files.
3. Run the repo's local quality gates.
4. Confirm remote checks are green.
5. Merge only when the branch is clean, reviewed, and reversible.

## Output

Lead with one verdict:

- `merge`: green and low risk.
- `fix first`: specific blocker exists.
- `do not merge`: security, data loss, or production risk.
