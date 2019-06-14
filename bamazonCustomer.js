var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Chicago13",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].id +
          " | " +
          res[i].productName +
          " | " +
          res[i].departmentName +
          " | " +
          res[i].price +
          " | " +
          res[i].stockQuantity
      );
      console.log("-----------------------------------");
    }
    purchaseProduct();
  });
}
var purchaseProduct = function() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Enter Product ID Number:"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many items would you like to buy?"
      }
    ])
    .then(function(answer) {
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].id === parseInt(answer.id)) {
            chosenItem = res[i];
            console.log(res[i].id);
            console.log(parseInt(answer.id));
            console.log("Your product is " + JSON.stringify(chosenItem));
          }
        }

        if (chosenItem.stockQuantity > parseInt(answer.quantity)) {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stockQuantity:
                  chosenItem.stockQuantity - parseInt(answer.quantity)
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw error;
              console.log(
                "Your total is " +
                  "$" +
                  parseInt(answer.quantity) * chosenItem.price
              );
            }
          );
        } else {
          console.log(
            "We're sorry. We don't have enough of that product for you to purchase."
          );
        }
      });
    });
};

// function productIdSearch() {
//   inquirer
//     .prompt({
//       name: "id",
//       type: "input",
//       message: "What product id would you like to buy?"
//     })
//     .then(function(answer) {
//       console.log(answer.id);
//       connection.query(
//         "SELECT * FROM products WHERE ?",
//         { id: answer.id },
//         function(err, res) {
//           console.log(
//             "id: " +
//               res[0].id +
//               " || Product Name: " +
//               res[0].productName +
//               " || Department Name: " +
//               res[0].departmentName +
//               " || Price: " +
//               res[0].price +
//               " || Quantity: " +
//               res[0].stockQuantity
//           );
//           runSearch();
//         }
//       );
//     });
// }
