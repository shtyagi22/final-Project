-- schema/03_create_comments.sql
DROP TABLE IF EXISTS comments CASCADE;
-- CREATE USERS
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_text VARCHAR(255),
  rating NUMERIC,
  created_at TIMESTAMP not null default CURRENT_TIMESTAMP,
  api_recipe VARCHAR(255),
  user_id INTEGER
  --INTEGER REFERENCES users(id) ON DELETE CASCADE
  -- ,recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
  );