function basic_operations() {
  // numbers and strings
  var x = 5;
  var y = 2;

  console.log("x is: ", x);
  console.log("type of x is: ", typeof x);
  console.log("y is: ", y);
  console.log("type of y is: ", typeof y);

  var z = x + y;
  console.log("z is: ", z);
  console.log("type of z is: ", typeof z);

  var w = z + "some string";
  console.log("w is: ", w);
  console.log("type of w is: ", typeof w);

  // object example
  var obj = {
    firstName: "Bob",
    lastName: "Johnson",
    age: 24
  };
  console.log("obj is: ", obj);
  console.log("content of obj is: ", obj["age"], obj["firstName"]);
  console.log("type of obj is: ", typeof obj);

  var a = 3;
  var b = 3.0;
  var c = "3";

  console.log("type of null", typeof null);
  console.log("type of undefined", typeof undefined);
  console.log("a==b: ", a == b);
  console.log("a===b: ", a === b);
  console.log("a==c: ", a == c);
  console.log("a===c: ", a === c);
  console.log("c==b: ", c == b);
  console.log("c===b: ", c === b);
}

function order_pizza() {
  var pizza_prices = {
    diavola: 10,
    qf: 14,
    qs: 8
  };

  var tr = document.createElement("tr");

  var name_td = document.createElement("td");
  var selectNode = document.getElementById("formName");
  name_td.innerHTML = selectNode.options[selectNode.selectedIndex].innerHTML;
  var pizza_key = selectNode.options[selectNode.selectedIndex].value;

  var q_td = document.createElement("td");
  q_td.innerHTML = document.getElementById("formQuantity").value;

  var price_td = document.createElement("td");
  price_td.innerHTML = pizza_prices[pizza_key];

  var total_td = document.createElement("td");
  total_td.innerHTML = q_td.innerHTML * pizza_prices[pizza_key];

  tr.appendChild(name_td);
  tr.appendChild(q_td);
  tr.appendChild(price_td);
  tr.appendChild(total_td);

  var tbody = document.getElementById("tableBody");
  tbody.appendChild(tr);

  alert("Pizza orders: " + tbody.children.length);
}
