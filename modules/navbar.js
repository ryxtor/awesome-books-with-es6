export function navSection(navItem) {
  const booklist = document.getElementById('books');
  const addBook = document.getElementById('add-books');
  const contact = document.getElementById('contact');

  if (navItem === 'list-nav') {
    booklist.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
  } else if (navItem === 'add-nav') {
    booklist.style.display = 'none';
    addBook.style.display = 'block';
    contact.style.display = 'none';
  } else {
    booklist.style.display = 'none';
    addBook.style.display = 'none';
    contact.style.display = 'flex';
  }
}