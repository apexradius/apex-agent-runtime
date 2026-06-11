#!/usr/bin/env node

/**
 * Public PreToolUse hook example.
 * Adds context before editing JSON so agents inspect structure first.
 */
const chunks = [];

process.stdin.on("data", (chunk) => chunks.push(chunk));
process.stdin.on("end", () => {
  try {
    const payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    const toolName = payload.tool_name ?? "";
    const filePath = payload.tool_input?.file_path ?? "";

    if (
      (toolName === "Edit" || toolName === "Write") &&
      filePath.endsWith(".json")
    ) {
      process.stdout.write(
        JSON.stringify({
          hookSpecificOutput: {
            hookEventName: "PreToolUse",
            additionalContext:
              "JSON guard: read the current structure first and verify exact field nesting before editing.",
          },
        }),
      );
    }
  } catch {
    // Hooks should fail quiet for parse errors that are not policy decisions.
  }
});
