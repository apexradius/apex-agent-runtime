#!/usr/bin/env node

/**
 * Public PreToolUse hook example.
 * Denies writes to configured protected paths.
 */
import { readFileSync } from "node:fs";

const policyPath =
  process.env.AGENT_RUNTIME_POLICY ??
  "hooks/policy-templates/path-policy.example.json";
const policy = JSON.parse(readFileSync(policyPath, "utf8"));
const chunks = [];

process.stdin.on("data", (chunk) => chunks.push(chunk));
process.stdin.on("end", () => {
  const payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  const toolName = payload.tool_name ?? "";
  const filePath = payload.tool_input?.file_path ?? "";
  const mutating = ["Edit", "Write", "MultiEdit"].includes(toolName);

  if (
    mutating &&
    policy.protectedPaths.some((prefix) => filePath.startsWith(prefix))
  ) {
    process.stdout.write(
      JSON.stringify({
        decision: "block",
        reason: `Protected path policy denied write to ${filePath}`,
      }),
    );
    process.exit(0);
  }

  process.exit(0);
});
