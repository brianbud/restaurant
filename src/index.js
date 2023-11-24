import "./reset.css";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
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

function renderContent(parentEl, content) {
  let div = document.createElement("div");
  div.innerHTML = content;
  parentEl.appendChild(div);
}
let body = document.querySelector("body");
body.appendChild(createheader());

renderContent(body, home());
let menuLink = getNavLinks();

function getNavLinks() {
  let menuLink = document.querySelector("nav ul li a[href='#menu']");
  return menuLink;
}

menuLink.addEventListener("click", (e) => {
  e.preventDefault();
  let contentDiv = document.querySelector("body > div");
  contentDiv.innerHTML = "";
  let menuPara = document.createElement("p");
  menuPara.textContent = "test";

  contentDiv.appendChild(menuPara);
});
