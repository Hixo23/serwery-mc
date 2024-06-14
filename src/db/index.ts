import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

config({ path: ".env.local" });

const client = new Client({
  connectionString: process.env.POSTGRES_URL!,
});

client.connect();
export const db = drizzle(client);
