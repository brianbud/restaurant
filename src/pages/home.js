export default function home() {
  const content = document.querySelector("#content");
  const hero = document.createElement("main");
  hero.classList.add("home-container");
  hero.innerHTML = `
    <section id="home">
        <p>A Taste of Chicago and Beyond.</p>
        <p>Chicago’s newest fine dining destination.</p> 
        <p>We offer a seasonal tasting menu that showcases the best of local and global ingredients, prepared with creativity and care.</p>
        <p>Our dishes are inspired by our personal stories, memories, and emotions, and we invite you to share them with us.</p> 
        <p>Whether you’re looking for a romantic date night, a special occasion, or a culinary adventure, we’ve got you covered.</p> 
        <p>Come and experience the magic of The Bear, where we make food with art and passion.</p>
    </section>
    
    `;

  return hero;
}
