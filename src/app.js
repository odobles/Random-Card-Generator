/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardSymbols = ["♦", "♥", "♠", "♣"];

  let num1 = Math.floor(Math.random() * cardValues.length);
  let num2 = Math.floor(Math.random() * cardSymbols.length);

  if (num2 == 0 || num2 == 1) {
    var div1 = document.querySelector(".theCard");

    var div2 = div1.querySelector(".thecardHeader");
    var div2a = div1.querySelector(".thecardBody");
    var div2b = div1.querySelector(".thecardFooter");

    var p1 = div2.querySelector("p");
    var p2 = div2a.querySelector("h1");
    var p3 = div2b.querySelector("p");

    let color1 = (p1.style.color = "red");
    let color2 = (p3.style.color = "red");

    if (color1 == "red" || color2 == "red") {
      p2.style.color = "red";
    }
  }

  var div1 = document.querySelector(".theCard");
  var div2 = div1.querySelector(".thecardHeader");
  var div2a = div1.querySelector(".thecardBody");
  var div2b = div1.querySelector(".thecardFooter");

  var p1 = div2.querySelector("p");
  var p2 = div2a.querySelector("h1");
  var p3 = div2b.querySelector("p");

  p1.innerHTML = cardSymbols[num2];
  p2.innerHTML = cardValues[num1];
  p3.innerHTML = cardSymbols[num2];
};
