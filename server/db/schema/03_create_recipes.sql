-- schema/04_create_recipes.sql
DROP TABLE IF EXISTS likes CASCADE;
-- CREATE USERS
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
user_id INTEGER,
recipe_id VARCHAR(255)--REFERENCES users(id) ON DELETE CASCADE
);