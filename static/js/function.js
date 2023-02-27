import booksData from './Books.json' assert {type: 'json'};
import { books, tavfurcelibtn, settingsbtn, aboutProject, head, nav, lessonSection, } from "./variable.js";

let title = '';
const header = document.querySelector('header')

export function ShowBooks(books, booksData) {
    for (const [index, [bookname, data]] of Object.entries(Object.entries(booksData))) {
        let book = document.createElement('div');
        book.classList.add('card');
        book.setAttribute('onclick', 'showLesson(this)');
        book.innerHTML = `
        <img src="./static/images/book-relative/book.svg" id="${index}" alt="${bookname}">
        <img src="${data.img}" alt="${bookname}" class="cover" id="bookCover${index}">
        <h3 class="card-title">${bookname}</h3>
        <img class="downloadBtn" src="./static/images/icons/download.svg" alt="download-btn">
        `;

        books.appendChild(book);
    }
}

settingsbtn.addEventListener('click', () => {
    header.classList.remove('showBgColor')
    books.classList.add('hide');
    aboutProject.classList.remove('hide');
    tavfurcelibtn.classList.remove('hide');
    nav.classList.add('hide');
    settingsbtn.classList.add('hide');
    lessonSection.classList.add('hide');
    head.innerHTML = '<h4>პროექტის შესახებ</h4>';
})

tavfurcelibtn.addEventListener('click', () => {
    header.classList.remove('showBgColor')
    books.classList.remove('hide');
    aboutProject.classList.add('hide');
    tavfurcelibtn.classList.add('hide');
    nav.classList.add('hide');
    settingsbtn.classList.remove('hide');
    lessonSection.classList.add('hide');
    head.innerHTML = '';
})

export function showLesson(lesson) {
    title = lesson.children[2].innerText;

    books.classList.add('hide');
    header.classList.add('showBgColor')
    tavfurcelibtn.classList.remove('hide');
    nav.classList.remove('hide');
    lessonSection.classList.remove('hide');

    head.innerHTML = `<h3>${title}</h3> <img src="${booksData[title]['img']}">`;

    showLessonSection('moemzade');
}

export function showLessonSection(section) {
    let sections = booksData[title];

    switch (section) {
        case 'moemzade':
            let moemzadeParags = '';
            let moemzadeQuestions = '';

            sections[section]['p'].forEach(p => {
                moemzadeParags += `<p>${p}</p>`;
            });
            sections[section]['li'].forEach(li => {
                moemzadeQuestions += `<li>${li}</li>`;
            });

            lessonSection.innerHTML = `
            <h2>კითხვისთვის მზადება:</h2>
            <img src="${sections[section]['image']}" alt="kitxvistvis mzadeba">
            <div class="right-block">
            ${moemzadeParags}
            <strong>თემატური კითხვები:</strong>
            <ul>
            ${moemzadeQuestions}
            </ul>
            </div>
            `;
            break;

        case 'waikitxe':
            let waikitxeParags1 = '';
            let waikitxeParags3 = '';
            let img1 = sections[section]['img1'] || '';
            let img2 = sections[section]['img2'] || '';
            sections[section]['p1'].forEach((p, idx) => {
                waikitxeParags1 += `<p>${p}</p>`;
                if (idx == 1) {
                    waikitxeParags1 += `<img src="${img1}" alt="kitxvistvis mzadeba">`;
                }
            });
            sections[section]['p3'].forEach((p, idx) => {
                waikitxeParags3 += `<p class="part3 hide">${p}</p>`;
                if (idx == 1) {
                    waikitxeParags3 += `<img class="part3 hide" src="${img2}" alt="kitxvistvis mzadeba">`;
                }
            });
            lessonSection.innerHTML = `
            <div class="right-block">
            ${waikitxeParags1}
            <p class="part2 hide">${sections[section]['p2']}</p>
            ${waikitxeParags3}
            <i class="fa-solid fa-chevron-down" onclick="toggleParags()"></i>
            </div>
            `;
            break;

        case 'upasuxe':
            let upasuxeQuestions = '';
            sections[section]['li'].forEach(li => {
                upasuxeQuestions += `<li>${li}</li>`;
            });

            lessonSection.innerHTML = `
            <h2>${sections[section]['title']}:</h2>
            <img src="${sections[section]['image']}" alt="${sections[section]['title']}">
            <div class="right-block">
            <ol>${upasuxeQuestions}</ol>
            </div>
            `;
            break;

        case 'sheavse':
            lessonSection.innerHTML = '';
            break;

        case 'sheqmeni':
            lessonSection.innerHTML = `
            <h2>${sections[section]['title']}:</h2>
            <img src="${sections[section]['image']}" alt="${sections[section]['title']}">
            <div class="right-block">
            <p>${sections[section]['p']}</p>
            </div>
            `;
            break;
    }
}

export function toggleParags() {
    const part2 = document.querySelectorAll('.part2');
    const part3 = document.querySelectorAll('.part3');

    if (part2[0].classList.contains('hide')) {
        part2.forEach(p => {
            p.classList.remove('hide')
        });
    } else if (part3[0].classList.contains('hide')) {
        part3.forEach(p => {
            p.classList.remove('hide')
        });
        document.querySelector('.fa-chevron-down').classList.add('upDown');
    } else {
        part2.forEach(p => {
            p.classList.add('hide')
        });
        part3.forEach(p => {
            p.classList.add('hide')
        });
        document.querySelector('.fa-chevron-down').classList.remove('upDown');
    }
}