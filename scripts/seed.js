const { db } = require("@vercel/postgres");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
              CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        "role" VARCHAR(255) NOT NULL
      );
        `;
    console.log(`Created "users" table`);
    const insertedUsers = await client.sql`
    INSERT INTO users (id, name, email, password, role)
    VALUES (uuid_generate_v4(), 'Joe', 'joe@gmail.com', '1j8yd', 'manager')
    ON CONFLICT (id) DO NOTHING
    `;
    console.log(`Seeded 1 users`);
    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.log("Error Seeding Users");
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
