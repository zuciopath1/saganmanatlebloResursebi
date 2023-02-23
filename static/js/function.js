import booksData from './Books.json' assert {type: 'json'};
import lessons from './lessons.json' assert {type: 'json'};

const books = document.getElementById('books');
const tavfurcelibtn = document.querySelector('.tavfurceli');
const settings = document.querySelector('.settings');
const aboutProject = document.getElementById('aboutProject');
const head = document.querySelector('.head');
const nav = document.querySelector('.navigation');
const lessonSection = document.getElementById('lesson');
let sections = {};

export function ShowBooks() {
    booksData.forEach((data, index) => {
        let book = document.createElement('div');
        book.classList.add('card');
        book.setAttribute('onclick', 'ShowLesson(this)');
        book.innerHTML = `
        <img src="./static/images/book-relative/book.svg" id="${index}" alt="${data.title}">
        <img src="${data.img}" alt="${data.title}" class="cover" id="bookCover${index}">
        <h3 class="card-title">${data.title}</h3>
        <img class="downloadBtn" src="./static/images/icons/download.svg" alt="download-btn">
        `;

        books.appendChild(book);
    });
}

export function ShowAboutProject() {
    books.classList.add('hide');
    aboutProject.classList.remove('hide');
    tavfurcelibtn.classList.remove('hide');
    nav.classList.add('hide');
    settings.classList.add('hide');
    lessonSection.classList.add('hide');
    head.innerHTML = '<h4>პროექტის შესახებ</h4>';
}

export function ShowTavfurceli() {
    books.classList.remove('hide');
    aboutProject.classList.add('hide');
    tavfurcelibtn.classList.add('hide');
    nav.classList.add('hide');
    settings.classList.remove('hide');
    lessonSection.classList.add('hide');
    head.innerHTML = '';
}

export function ShowLesson(lesson) {
    let idx = lesson.children[0].id;
    let title = booksData[idx]['title'];

    books.classList.add('hide');
    tavfurcelibtn.classList.remove('hide');
    nav.classList.remove('hide');
    lessonSection.classList.remove('hide');

    sections = lessons[title];
    ShowLessonSection('moemzade');

    head.innerHTML = `<h3>${title}</h3> <img src="${booksData[idx]['img']}">`;
}

export function ShowLessonSection(section) {
    switch (section) {
        case 'moemzade':
            lessonSection.innerHTML = 'moemzade';
            break;

        case 'waikitxe':
            lessonSection.innerHTML = 'waikitxe';
            break;

        case 'upasuxe':
            let questions = '';

            sections[section]['li'].forEach(li => {
                questions += `<li>${li}</li>`;
            });

            lessonSection.innerHTML = `
            <h2>${sections[section]['title']}:</h2>
            <img src="${sections[section]['image']}" alt="${sections[section]['title']}">
            <ol>${questions}</ol>
            `;
            break;

        case 'sheavse':
            lessonSection.innerHTML = 'sheavse';
            break;

        case 'sheqmeni':
            lessonSection.innerHTML = `
            <h2>${sections[section]['title']}:</h2>
            <img src="${sections[section]['image']}" alt="${sections[section]['title']}">
            <p>${sections[section]['p']}</p>
            `;
            break;
    }
}