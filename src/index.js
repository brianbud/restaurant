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

  let nav = document.createElement("nav");
  let list = document.createElement("ul");

  let home = document.createElement("li");
  let menu = document.createElement("li");
  let about = document.createElement("li");

  home.innerHTML = `<a href="#home">Home</a>`;
  menu.innerHTML = `<a href="#menu">menu</a>`;
  about.innerHTML = `<a href="#about">about</a>`;

  list.appendChild(home);
  list.appendChild(menu);
  list.appendChild(about);

  nav.appendChild(list);
  header.appendChild(nav);

  return header;
}

let body = document.querySelector("body");
body.appendChild(createheader());
