import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export type HealthCheck = () => Promise<string | null> | string | null;

export interface RuntimeServerOptions {
  name: string;
  version: string;
  healthChecks?: Record<string, HealthCheck>;
}

export type ToolTextResult = CallToolResult;

export function createRuntimeServer(options: RuntimeServerOptions): McpServer {
  const server = new McpServer({
    name: options.name,
    version: options.version,
  });

  server.registerTool(
    "runtime_health",
    {
      description: "Return runtime metadata and health check results.",
      annotations: {
        readOnlyHint: true,
      },
    },
    async () => {
      const checks = options.healthChecks ?? {};
      const results: Record<string, "ok" | string> = {};

      for (const [name, check] of Object.entries(checks)) {
        try {
          const message = await check();
          results[name] = message ?? "ok";
        } catch (error) {
          results[name] =
            error instanceof Error ? error.message : String(error);
        }
      }

      return textResult(
        JSON.stringify(
          {
            name: options.name,
            version: options.version,
            checks: results,
          },
          null,
          2,
        ),
      );
    },
  );

  return server;
}

export function textResult(text: string): ToolTextResult {
  return {
    content: [{ type: "text", text }],
  };
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
