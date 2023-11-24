import "./reset.css";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";
import home from "./pages/home.js";
import Data from "./data.json";
import printMe from "./print.js";

function createheader() {
  let header = document.createElement("header");

  let title = document.createElement("h1");
  title.textContent = "The Bear";
  header.appendChild(title);

  return header;
}

let body = document.querySelector("body");
body.appendChild(createheader());
