import type { Config } from "drizzle-kit";

import "dotenv/config";

import { env } from "../env";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}
console.log("POSTGRES_URL", env.POSTGRES_URL);
const nonPoolingUrl = env.POSTGRES_URL;

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;
