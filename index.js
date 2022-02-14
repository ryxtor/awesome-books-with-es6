import { navSection } from "./modules/navbar.js";

navSection('list-nav');

const navList = ["list-nav", "add-nav", "contact-nav"];

navList.forEach(element => {
  let display = document.getElementById(`${element}`);
  display.addEventListener("click", () => {
    navSection(element);
  })
});