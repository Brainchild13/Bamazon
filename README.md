# Bamazon

Mysql and node.js database application - Week-12 project

## Things to stll do:

- ### Updating the sql database to reflect the remaining quantity
  - subtracting the items from the database quantity once the purchase is approved and calculated
  - showing the item quantity in the database after the item is subtracted
  -

## Challenges to complete

- ### Challenge #2 Manager View

  - Show products that are below the level of 5
    - run query where products of id is less than 5 total
  - create function similar to purchase function that adds the chosen quantity to the total quantity already in the database
  - Add a new product by inserting a product using sql, into the database

  - View products list with same view from beginning of the application
  - View low inventory - shows all products less than 5 in total inventory using sql statement that chooses stock quantity from products table
  - choice to add new product via prompt - should give all of the choices from the fields in the product table

- ### Supervisor View
  - Create a new table in the database called departments
    - Fields include departmentId, departmentName, overheadCosts
  - Add a new field to the products table using insert into - called the productSales field with the equation price \* quantityPurchasesd = productSales
  - Create new file bamazonSupervisor.js
    - View product sales by department - sql productSales where department ?
    - Create a new Department - insert department with Id into department table
