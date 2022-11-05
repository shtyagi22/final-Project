-- schema/04_create_posts.sql
DROP TABLE IF EXISTS posts CASCADE;
-- CREATE USERS
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  post_text VARCHAR(255),
  image VARCHAR(1000),
  user_id INTEGER --REFERENCES users(id) ON DELETE CASCADE
);