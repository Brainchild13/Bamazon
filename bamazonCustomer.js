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
    }
    console.log("-----------------------------------");
  });
}

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
