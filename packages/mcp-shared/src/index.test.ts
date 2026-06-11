import assert from "node:assert/strict";
import test from "node:test";
import { textResult } from "./index.js";

test("textResult returns MCP text content", () => {
  assert.deepEqual(textResult("hello"), {
    content: [{ type: "text", text: "hello" }],
  });
});
