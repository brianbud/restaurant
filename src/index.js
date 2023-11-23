import _ from "lodash";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpacassdfasdfk!!!!!!"], " ");
  element.classList.add("hello");

  const bgImg = new Image();
  bgImg.src = BackgroundImg;
  element.appendChild(bgImg);
  return element;
}

document.body.appendChild(component());
