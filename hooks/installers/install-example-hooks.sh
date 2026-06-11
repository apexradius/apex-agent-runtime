#!/usr/bin/env bash
set -euo pipefail

target_dir="${1:-$HOME/.agent-runtime-hooks}"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

mkdir -p "$target_dir"
cp "$repo_root/hooks/source/json-shape-guard.js" "$target_dir/json-shape-guard.js"
cp "$repo_root/hooks/source/path-policy-guard.js" "$target_dir/path-policy-guard.js"
cp "$repo_root/hooks/policy-templates/path-policy.example.json" "$target_dir/path-policy.example.json"

chmod +x "$target_dir/json-shape-guard.js" "$target_dir/path-policy-guard.js"

printf 'Installed example hooks to %s\n' "$target_dir"
printf 'Review your host-specific hook configuration before enabling them.\n'
