import Data from "../data.json";

export default function menu() {
  const menuArr = Data.menu;
  let menuContent = "Menu";

  menuArr.forEach((item) => {
    menuContent += `
    <p>${item.name}</p><span>${item.price}</span>
    <p>${item.description}</p>
    `;
  });

  return menuContent;
}
