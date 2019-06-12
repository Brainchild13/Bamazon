-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products
(
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
    id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR
    (30) NOT NULL,
  -- Makes a sting column called "department_name" --
  department_name VARCHAR
    (30),
  -- Makes an numeric column called "price" --
  price DECIMAL
    (10,2),
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER
    (10),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY
    (id)
);

    -- Populating 10 different products into database
    INSERT INTO authors
        (firstName, lastName)
    values
        ('Jane', 'Austen');