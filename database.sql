-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- database name: fs-react-shopping

CREATE TABLE list (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL (4,2) NOT NULL,
	"unit" VARCHAR(40) NOT NULL,
    "purchased" BOOLEAN DEFAULT FALSE
	);

INSERT INTO "list" ("name", "quantity", "unit")
VALUES ('Apples', '5.0', 'lbs'), ('Orange Soda', '1', 'liter'), ('Bread', '2', 'loafs'), ('Sliced Almonds', '3.5', 'cups');

