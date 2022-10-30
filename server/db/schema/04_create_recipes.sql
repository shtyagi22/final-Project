-- schema/04_create_recipes.sql
DROP TABLE IF EXISTS recipes CASCADE;
-- CREATE USERS
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
 likes INTEGER,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);