-- seeds/03_comments.sql
-- comments seeds
INSERT INTO comments (id, comment_text, rating, created_at, user_id, recipe_id) VALUES (1,'Just awesome!', 4,'2017-03-31 9:30:20', 1, 2);
INSERT INTO comments (id, comment_text, rating, created_at, user_id, recipe_id) VALUES (2,'Must try!!', 5,'2017-03-31 9:30:20', 2, 1);
INSERT INTO comments (id, comment_text, rating, created_at, user_id, recipe_id) VALUES (3,'Amazing dish for fall!', 5,'2017-03-31 9:30:20', 3, 3);