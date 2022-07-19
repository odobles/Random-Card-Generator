/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]; // List for possible card values.
  let cardSymbols = ["♦", "♥", "♠", "♣"]; // List for possible card symbols.

  let num1 = Math.floor(Math.random() * cardValues.length); // Generate a random number for the card values.
  let num2 = Math.floor(Math.random() * cardSymbols.length); // Generate a random number for the card symbol.

  let DOMelements = []; // Empy list where our DOM elements will get pushed to eventually.

  //------This code is used to retrieve each of the DOM elements that we need and then push them into the empy list.
  var div1 = document.querySelector(".theCard");
  var div2 = div1.querySelector(".thecardHeader");
  var div2a = div1.querySelector(".thecardBody");
  var div2b = div1.querySelector(".thecardFooter");

  var p1 = div2.querySelector("p"); // <---- This will be our Top "card symbol".
  var h1 = div2a.querySelector("h1"); // <---- This will be our "card value".
  var p2 = div2b.querySelector("p"); // <---- This will be our bottom "card symbol".

  DOMelements.push(p1, h1, p2);

  //------This IF is used to colour the <p> values red if num2 is equal to 0 or 1, which are the possitions for diamond and heart symbols in the list.
  //Also turns red the <h1> which corresponds to the card value if and only if <p> values are red also.
  if (num2 == 0 || num2 == 1) {
    let color1 = (p1.style.color = "red");
    let color2 = (p2.style.color = "red");

    if (color1 == "red" || color2 == "red") {
      h1.style.color = "red";
    }
  }

  //------This function updates our HTML accordingly with a random value using our random numbers generated earlier.
  function HTMLUpdate(element) {
    if (element == p1 || element == p2) {
      element.innerHTML = cardSymbols[num2];
    } else {
      element.innerHTML = cardValues[num1];
    }
  }

  //------This for cycle calls our function for each one of the elements in our "DOMelements" list.
  DOMelements.forEach(HTMLUpdate);
};
