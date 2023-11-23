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
  return header;
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

  return home;
}

document.body.appendChild(header());
document.body.appendChild(home());
