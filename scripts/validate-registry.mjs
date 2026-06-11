import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = resolve(root, "skills/registry/manifest.json");
const aliasesPath = resolve(root, "skills/registry/aliases.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const aliases = JSON.parse(readFileSync(aliasesPath, "utf8"));

const ids = new Set();

for (const skill of manifest.skills) {
  if (!skill.id || !skill.name || !skill.path || !skill.description) {
    throw new Error(
      `Skill is missing required metadata: ${JSON.stringify(skill)}`,
    );
  }
  if (ids.has(skill.id)) {
    throw new Error(`Duplicate skill id: ${skill.id}`);
  }
  ids.add(skill.id);

  const skillPath = resolve(dirname(manifestPath), skill.path);
  if (!existsSync(skillPath)) {
    throw new Error(`Skill path does not exist: ${skill.path}`);
  }
}

for (const [alias, target] of Object.entries(aliases)) {
  if (!ids.has(target)) {
    throw new Error(`Alias ${alias} points at missing skill ${target}`);
  }
}

console.log(
  `Validated ${ids.size} skills and ${Object.keys(aliases).length} aliases.`,
);
