import "./reset.css";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js";

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

let initialRender = renderContent(body, home());
initialRender;

//Nav Links Listeners
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let pageId = link.getAttribute("href");
    let contentDiv = document.querySelector("body > div");
    contentDiv.innerHTML = "";

    switch (pageId) {
      case "#home":
        renderContent(contentDiv, home());
        break;
      case "#menu":
        renderContent(contentDiv, menu());
        break;
      case "#about":
        renderContent(contentDiv, about());
        break;
    }
  });
});
