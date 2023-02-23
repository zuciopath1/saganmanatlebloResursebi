const books = document.getElementById('books');
const tavfurcelibtn = document.querySelector('.tavfurceli');
const settings = document.querySelector('.settings');
const aboutProject = document.getElementById('aboutProject');
const head = document.querySelector('.head');

export function ShowBooks(booksData) {
    booksData.forEach((data, index) => {
        let book = document.createElement('div');
        book.classList.add('card');
        book.innerHTML = `
        <img src="./static/images/book-relative/book.svg" alt="${data.title}">
        <img src="${data.img}" alt="${data.title}" class="cover" id="bookCover${index}">
        <h3 class="card-title">${data.title}</h3>
        <img class="downloadBtn" src="./static/images/icons/download.svg" alt="download-btn">
        `;

        books.appendChild(book);
    });
}

export function ShowAboutProject() {
    books.classList.add('hide');
    settings.classList.add('hide');
    tavfurcelibtn.classList.remove('hide');
    aboutProject.classList.remove('hide');
    head.innerHTML = 'პროექტის შესახებ';
}

export function ShowTavfurceli() {
    books.classList.remove('hide');
    settings.classList.remove('hide');
    tavfurcelibtn.classList.add('hide');
    aboutProject.classList.add('hide');
    head.innerHTML = '';
}