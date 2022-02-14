import { navSection } from "./modules/navbar.js";
import { BookCollection } from "./modules/class.js";

navSection('list-nav');
const navList = ["list-nav", "add-nav", "contact-nav"];
navList.forEach(element => {
  let display = document.getElementById(`${element}`);
  display.addEventListener("click", () => {
    navSection(element);
  })
});

const btnAdd = document.getElementById('btn-add-id');
const runClass = new BookCollection();
runClass.displayBooks();

btnAdd.addEventListener('click', () => {
  runClass.addBooks();
  runClass.displayBooks();
});