-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE list (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL (4,2) NOT NULL,
	"unit" VARCHAR(40) NOT NULL,
    "purchased" BOOLEAN DEFAULT FALSE
	);

INSERT INTO "list" ("name", "quantity", "unit")
VALUES ('apples', '1.5', 'lbs'), ('orange soda', '1', 'ltr'), ('bread', '2', 'loaf');

