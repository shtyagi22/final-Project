-- schema/04_create_post_comments.sql
DROP TABLE IF EXISTS post_comments CASCADE;
-- CREATE USERS
CREATE TABLE post_comments (
  id SERIAL PRIMARY KEY,
  comment_text VARCHAR(255),
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP
);