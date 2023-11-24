import "./reset.css";
import "./style.css";
import BackgroundImg from "./images/forest.jpg";
import home from "./pages/home.js";
import Data from "./data.json";
import printMe from "./print.js";

function header() {
  const header = document.createElement("header");
  header.innerHTML = `
    <div><h1 id="title">The Bear</h1></div>
    <nav>
    <button>Home</button>
    <button>Menu</button>
    <button>About Us</button>
    <nav>
`;

  header.classList.add("title");

  // const bgImg = new Image();
  // bgImg.src = BackgroundImg;
  // content.appendChild(bgImg);
  document.body.appendChild(header);
}

function homeContent() {
  const home = document.createElement("main");
  home.innerHTML = `
  <section id="home">
      <p>A Taste of Chicago and Beyond.</p>
      <p>Chicago’s newest fine dining destination.</p> 
      <p>We offer a seasonal tasting menu that showcases the best of local and global ingredients, prepared with creativity and care.</p>
      <p>Our dishes are inspired by our personal stories, memories, and emotions, and we invite you to share them with us.</p> 
      <p>Whether you’re looking for a romantic date night, a special occasion, or a culinary adventure, we’ve got you covered.</p> 
      <p>Come and experience the magic of The Bear, where we make food with art and passion.</p>
  </section>
  `;

  document.body.appendChild(home);
}

function menuContent() {
  let menuContainer = document.createElement("main");

  Data.menu.forEach((item) => {
    menuContainer.innerHTML += `
      <div>${item.name}</div>
    `;
  });

  document.body.appendChild(menuContainer);
}

const content = document.querySelector("body");
content.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (e.target.innerText === "Home") {
      homeContent();
    } else if (e.target.innerText === "Menu") {
      document.querySelector("main").innerHTML = "";
      menuContent();
    } else if (e.target.innerText === "About Us") {
      console.log("ypu clicked on About Us");
    }
  }
});

let firstRender = () => {
  header();
  homeContent();
};

firstRender();
