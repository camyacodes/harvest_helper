import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Check if request method is GET
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Assuming a connection pool is established elsewhere (check Vercel Postgres docs)
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;

    return res.status(200).json({ message: "Table creation attempted" });
  } catch (error) {
    return res.status(500).json({ error: "Error creating table" });
  }
}
