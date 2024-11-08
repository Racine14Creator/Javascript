var a = 5;
var b = 4;

var sum = a + b;

var myName = "Israel";
console.log(myName, sum);

console.log(`${a}+${b}=${sum} sum of a and b`); // Concatenation

var button = document.getElementById("button"),
  output = document.getElementById("output");

var paragraph = document.querySelector("p");
var p = document.querySelectorAll("p");

button.addEventListener("click", function () {
  var name = document.getElementById("name").value;

  //   output.innerHTML = "Welcome " + name;
  p.innerHTML = "Welcome " + name;
  console.log(name);
});
