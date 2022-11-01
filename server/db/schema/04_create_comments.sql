-- schema/03_create_comments.sql
DROP TABLE IF EXISTS comments CASCADE;
-- CREATE USERS
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_text VARCHAR(255),
  rating INTEGER,
  created_at TIMESTAMP,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
  );