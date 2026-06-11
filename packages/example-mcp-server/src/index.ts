#!/usr/bin/env node

import {
  createRuntimeServer,
  textResult,
} from "@apex-agent-runtime/mcp-shared";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = createRuntimeServer({
  name: "apex-agent-runtime-example",
  version: "0.1.0",
  healthChecks: {
    node: () => process.version,
  },
});

server.tool(
  "echo_intent",
  {
    intent: z.string().min(1).describe("What the user wants to do."),
    confidence: z.enum(["low", "medium", "high", "certain"]).default("medium"),
  },
  async ({ intent, confidence }) => {
    return textResult(
      JSON.stringify(
        {
          intent,
          confidence,
          nextAction:
            "Route to the smallest tool or skill that can verify the claim.",
        },
        null,
        2,
      ),
    );
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
