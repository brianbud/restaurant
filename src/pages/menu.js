import Data from "../data.json";

export default function menu() {
  const menuArr = Data.menu;
  let menuContent = "";

  menuArr.forEach((item) => {
    menuContent += `
    <div class="menu-item">
      <div>
      <p>${item.name}</p><span>${item.price}</span>
      </div>
      <div>
      <p>${item.description}</p>
      </div>
    </div>
    `;
  });

  return menuContent;
}
