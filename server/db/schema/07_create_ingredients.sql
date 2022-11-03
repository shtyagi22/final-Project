-- schema/07_create_ingredients.sql
DROP TABLE IF EXISTS ingredients CASCADE;
-- CREATE INGREDIENTS
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  ingredient VARCHAR(255)
);