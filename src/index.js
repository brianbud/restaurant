import _ from "lodash";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";
import Data from "./data.json";

console.log(Data.menu[1]);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "world!!!!!!"], " ");
  element.classList.add("hello");

  const bgImg = new Image();
  bgImg.src = BackgroundImg;
  element.appendChild(bgImg);
  return element;
}

document.body.appendChild(component());
