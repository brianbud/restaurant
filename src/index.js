import "./reset.css";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";
import Data from "./data.json";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `<h1>Hello World</h1>`;
  element.classList.add("hello");

  btn.innerHTML = "click me";
  btn.onclick = printMe;
  element.appendChild(btn);

  const bgImg = new Image();
  bgImg.src = BackgroundImg;
  element.appendChild(bgImg);
  return element;
}

document.body.appendChild(component());
