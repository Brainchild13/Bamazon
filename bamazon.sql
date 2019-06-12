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
  -- Makes a string column called "productName" which cannot contain null --
  productName VARCHAR
    (30) NOT NULL,
  -- Makes a sting column called "departmentName" --
  departmentName VARCHAR
    (30),
  -- Makes an numeric column called "price" --
  price DECIMAL
    (10,2),
  -- Makes an numeric column called "stockQuantity" --
  stockQuantity INTEGER
    (10),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY
    (id)
);

    -- Populating 10 different products into database
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Ark Angel Holster', 'Gun Accessories', 75, 50);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Spyderco Delica 4', 'Knives', 50, 10);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Streamlight Stylus Pro', 'Flashlights', 35, 100);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Carbon Wallet', 'Everyday Carry', 25, 25);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Carbon Money Clip', 'Everyday Carry', 15, 5);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Rush 12 Bag', 'Backpacks', 100, 10);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Samsung Note 4', 'Cellular Phones', 800, 4);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('5.11 Gun Belt', 'Gun Accessories', 65, 20);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Plasma Lighter', 'Fire Making', 30, 50);
    INSERT INTO products
        (productName, departmentName, price, stockQuantity)
    values
        ('Glock 23', 'Firearms', 675, 8);

        