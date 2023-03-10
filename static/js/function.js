import booksData from './Books.json' assert {type: 'json'};
import { books, tavfurcelibtn, settingsbtn, aboutProject, head, nav, lessonSection, header } from "./variable.js";

let title = ''; // to save title of book

// renders books on main page
export function ShowBooks(books, booksData) {
    for (const [index, [bookname, data]] of Object.entries(Object.entries(booksData))) {
        let book = document.createElement('div');
        book.classList.add('card');
        book.setAttribute('onclick', 'showLesson(this)'); //show lessons on books click
        book.innerHTML = `
        <img src="./static/images/book-relative/book.svg" id="${index}" alt="${bookname}">
        <img src="${data.img}" alt="${bookname}" class="cover" id="bookCover${index}">
        <h3 class="card-title">${bookname}</h3>
        <img class="downloadBtn" src="./static/images/icons/download.svg" alt="download-btn">
        `;

        books.appendChild(book);
    }
}

//click on setting button will show about projects and hide everything else
settingsbtn.addEventListener('click', () => {
    header.classList.remove('showBgColor');
    books.classList.add('hide');
    aboutProject.classList.remove('hide');
    tavfurcelibtn.classList.remove('hide');
    nav.classList.add('hide');
    settingsbtn.classList.add('hide');
    lessonSection.classList.add('hide');
    head.innerHTML = '<h4>პროექტის შესახებ</h4>';
})

//click on home button will show main page and hide everything else
tavfurcelibtn.addEventListener('click', () => {
    header.classList.remove('showBgColor');
    books.classList.remove('hide');
    aboutProject.classList.add('hide');
    tavfurcelibtn.classList.add('hide');
    nav.classList.add('hide');
    settingsbtn.classList.remove('hide');
    lessonSection.classList.add('hide');
    head.innerHTML = '';
})

//shows lessons for each book on click them
export function showLesson(lesson) {
    title = lesson.children[2].innerText; // get name of book

    header.classList.add('showBgColor');
    books.classList.add('hide');
    tavfurcelibtn.classList.remove('hide');
    nav.classList.remove('hide');
    lessonSection.classList.remove('hide');

    head.innerHTML = `<h3>${title}</h3> <img src="${booksData[title]['img']}">`;

    showLessonSection('moemzade');
}

// show each lesson chosen by header (left nav bar)
export function showLessonSection(section) {
    let sections = booksData[title];

    switch (section) {
        case 'moemzade':
            let moemzadeParags = '';
            let moemzadeQuestions = '';

            sections[section]['p'].forEach(p => {
                if (typeof p == 'string') {
                    moemzadeParags += `<p>${p}</p>`;
                } else {
                    moemzadeParags += `<strong>${p['strong']}</strong>`;
                }
            });
            sections[section]['li'].forEach(li => {
                moemzadeQuestions += `<li>${li}</li>`;
            });

            lessonSection.innerHTML = `
            <h2>${sections[section]['title']}</h2>
            <img src="${sections[section]['image']}" class="lessonLogo" alt="kitxvistvis mzadeba">
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
            let waikitxeParags2 = '';
            let waikitxeParags3 = '';

            sections[section]['p1'].forEach((p) => {
                waikitxeParags1 += `<p>${p}</p>`;
            });
            waikitxeParags1 += `<img src="${sections[section]["images"][0]}" alt="kitxvistvis mzadeba">`;

            sections[section]['p2'].forEach((p) => {
                waikitxeParags2 += `<p>${p}</p>`;
            });
            waikitxeParags2 += `<img src="${sections[section]["images"][1]}" alt="kitxvistvis mzadeba">`;
            waikitxeParags2 += `<img src="${sections[section]["images"][2]}" alt="kitxvistvis mzadeba">`;

            sections[section]['p3'].forEach((p) => {
                waikitxeParags3 += `<p>${p}</p>`;
            });
            waikitxeParags3 += `<img src="${sections[section]["images"][3]}" alt="kitxvistvis mzadeba">`;

            lessonSection.innerHTML = `
            <div class="${section} ${title}">
            <div class="part1">
            ${waikitxeParags1}
            </div>
            <div class="part2 hide">
            ${waikitxeParags2}
            </div>
            <div class="part3 hide">
            ${waikitxeParags3}
            </div>
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
            <img src="${sections[section]['image']}" class="lessonLogo" alt="${sections[section]['title']}">
            <div class="right-block">
            <ol>${upasuxeQuestions}</ol>
            </div>
            `;
            break;

        case 'sheavse':
            if (title == 'პეგასი') {
                pegasiSheavse();
            } else if (title == 'დიდი მოგზაური') {
                didiMogzauriSheavse();
            }
            break;

        case 'sheqmeni':
            lessonSection.innerHTML = `
            <h2>${sections[section]['title']}:</h2>
            <img src="${sections[section]['image']}" class="lessonLogo" alt="${sections[section]['title']}">
            <div class="right-block">
            <p>${sections[section]['p']}</p>
            </div>
            `;
            break;

        default:
            if (title == 'პეგასი') {
                pegasiSheavse(section);
            } else if (title == 'დიდი მოგზაური') {
                didiMogzauriSheavse(section);
            }
            break;
    }
}

//for waikitxe section, shows and hide paragraps on click arrow
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


function didiMogzauriSheavse(e) {
    let section = booksData['დიდი მოგზაური']['sheavse'];
    let subsection = e ? e : "დააკავშირე";
    let options = "";

    switch (subsection) {
        case 'დააკავშირე':
            lessonSection.innerHTML = "daakavshire"
            break;

        case 'ჩასვი':
            section[subsection]['p'].forEach(p => {
                options += `
            <div class="checkList">
                <input type="number" min=1 max=4> <p>${p}</p>
            </div>
            `
            });

            lessonSection.innerHTML = `
            <h2>${section[subsection]['title']}:</h2>
            <img src="${section['img']}" class="lessonLogo" alt="sheavse">
            <div class="right-block">
            ${options}
            ${addButtons()}
            </div>
            `;
            document.querySelector("#dasruleba").addEventListener('click', checkMogzauriChasvi)
            document.querySelector("#tavidan").addEventListener('click', resetMogzauriChasvi)
            break;

        case 'შეავსე':
            lessonSection.innerHTML = "sheavse"
            break;
    }
}

function pegasiSheavse(e) {
    let section = booksData['პეგასი']['sheavse'];
    let subsection = e ? e : "დააკავშირე";

    switch (subsection) {
        case 'დააკავშირე':
            const leftBlock = section[subsection]['daakavshire_left_block'];
            const rightBlock = section[subsection]['daakavshire_right_block'];

            let leftBlockHtml = '';
            leftBlock.forEach((item) => {
                leftBlockHtml += `<p>${item}</p>`;
            });

            let rightBlockHtml = '';
            rightBlock.forEach((item) => {
                rightBlockHtml += `<p>${item}</p>`;
            });

            lessonSection.innerHTML = `
            <h2>${section[subsection]['title']}</h2>
            <img src="${section['img']}" class="lessonLogo" alt="sheavse">
            <div class="right-block">
            <div id="pegasiChasvi">
            <div class="daakavshire">
                <div class="daakavshire_left_block">${leftBlockHtml}</div>
                <canvas id="canvas"></canvas>
                <div class="daakavshire_right_block">${rightBlockHtml}</div>
            </div>
            </div>
            ${addButtons()}
            </div>
            `;
            document.querySelector("#dasruleba").addEventListener('click', checkPegasiDaakavshire);
            document.querySelector("#tavidan").addEventListener('click', resetPegasiDaakavshire);
            startCanvas();
            break;

        case 'ჩასვი':
            lessonSection.innerHTML = `
            <h2>${section[subsection]['title']}</h2>
            <img src="${section['img']}" class="lessonLogo" alt="sheavse">
            <div>
            ${addButtons()}
            </div>
            `;
            break;

        case 'შეავსე':
            lessonSection.innerHTML = `
            <h2>${section[subsection]['title']}</h2>
            <img src="${section['img']}" class="lessonLogo" alt="sheavse">
            <div>
            ${addButtons()}
            </div>
            `;
            break;
    }
}

function addButtons() {
    return `
    <div id="dasrulebaTavidan">
        <h4 id="dasruleba">დასრულება</h4>
        <h4 id="tavidan">თავიდან</h4>
    </div>
    `
}

function checkMogzauriChasvi() {
    let pasuxebi = booksData['დიდი მოგზაური']['sheavse']['ჩასვი']['pasuxebi'];

    document.querySelectorAll(".checkList").forEach((inpt, idx) => {
        if (inpt.children[0].value == pasuxebi[idx]) {
            inpt.children[1].classList.add('correct');
        } else {
            inpt.children[1].classList.add('wrong');
        }
    });
}

function resetMogzauriChasvi() {
    document.querySelectorAll(".checkList").forEach(inpt => {
        inpt.children[0].value = null;
        inpt.children[1].classList.remove('correct');
        inpt.children[1].classList.remove('wrong');
    });
}

function checkPegasiDaakavshire() {
    const daakavshire_left_block = document.querySelector('.daakavshire_left_block');
    const daakavshire_right_block = document.querySelector('.daakavshire_right_block');

    daakavshire_left_block.childNodes.forEach(element => {
        element.style.color = 'red';
    });
    daakavshire_right_block.childNodes.forEach(element => {
        element.style.color = 'red';
    });

    if (Object.keys(chosen).length) {
        for (const [key, value] of Object.entries(chosen)) {
            if (value == correctPegasiDaakavshireAnswers[key]) {
                existingLines[key].StrokeColor = 'green';
                daakavshire_left_block.children[key - 1].style.color = 'green';
                daakavshire_right_block.children[value - 1].style.color = 'green';
            } else {
                existingLines[key] ? existingLines[key].StrokeColor = 'red' : null;
            }
        }
    }

    ended = true;
    draw();
}

function resetPegasiDaakavshire() {
    existingLines = [];
    chosen = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    };
    ended = false;
    for (let i of document.querySelector('.daakavshire_left_block').children) {
        i.style.color = 'black';
    }
    for (let i of document.querySelector('.daakavshire_right_block').children) {
        i.style.color = 'black';
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//canvas functions START
let canvas = null;
let bounds = null;
let ctx = null;
let ended = false;

let correctPegasiDaakavshireAnswers = booksData["პეგასი"]["sheavse"]["დააკავშირე"]["swori_pasuxebi"];
let chosen = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0
}

let startX = 0;
let startY = 0;
let mouseX = 0;
let mouseY = 0;
let isDrawing = false;
let existingLines = {};

function startCanvas() {
    canvas = document.getElementById("canvas");
    canvas.width = 180;
    canvas.height = 368;
    canvas.onmousedown = onmousedown;
    canvas.onmouseup = onmouseup;
    canvas.onmousemove = onmousemove;

    bounds = canvas.getBoundingClientRect();
    ctx = canvas.getContext("2d");

    draw();
}

function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 180, 368);

    ctx.lineWidth = 2;

    for (let line of Object.values(existingLines)) {
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.strokeStyle = line.StrokeColor;
        ctx.stroke();
    }


    if (isDrawing) {
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
}

function onmousedown(e) {
    if (e.button === 0 && e.clientX - bounds.left <= 23 && !ended) {
        if (!isDrawing) {
            startX = e.clientX - bounds.left;
            startY = e.clientY - bounds.top;

            if (startY >= 20 && startY <= 35 && !chosen['1']) {
                chosen["1"] = null;
                isDrawing = true;
            } else if (startY >= 110 && startY <= 125 && !chosen['2']) {
                chosen["2"] = null;
                isDrawing = true;
            } else if (startY >= 200 && startY <= 215 && !chosen['3']) {
                chosen["3"] = null;
                isDrawing = true;
            } else if (startY >= 295 && startY <= 310 && !chosen['4']) {
                chosen["4"] = null;
                isDrawing = true;
            }
        }

        draw();
    }
}

function onmouseup(e) {
    if (e.button === 0) {
        if (isDrawing && e.clientX - bounds.left >= 155) {
            if (mouseY >= 20 && mouseY <= 35 && !Object.values(chosen).includes(1)) {
                for (const [key, value] of Object.entries(chosen)) {
                    if (value == null) {
                        chosen[key] = 1;

                        existingLines[key] = {
                            startX: startX,
                            startY: startY,
                            endX: mouseX,
                            endY: mouseY,
                            StrokeColor: 'black'
                        };
                    }
                }
                isDrawing = false;
            } else if (mouseY >= 110 && mouseY <= 125 && !Object.values(chosen).includes(2)) {
                for (const [key, value] of Object.entries(chosen)) {
                    if (value == null) {
                        chosen[key] = 2;

                        existingLines[key] = {
                            startX: startX,
                            startY: startY,
                            endX: mouseX,
                            endY: mouseY,
                            StrokeColor: 'black'
                        };
                    }
                }
                isDrawing = false;
            } else if (mouseY >= 200 && mouseY <= 215 && !Object.values(chosen).includes(3)) {
                for (const [key, value] of Object.entries(chosen)) {
                    if (value == null) {
                        chosen[key] = 3;

                        existingLines[key] = {
                            startX: startX,
                            startY: startY,
                            endX: mouseX,
                            endY: mouseY,
                            StrokeColor: 'black'
                        };
                    }
                }
                isDrawing = false;
            } else if (mouseY >= 295 && mouseY <= 310 && !Object.values(chosen).includes(4)) {
                for (const [key, value] of Object.entries(chosen)) {
                    if (value == null) {
                        chosen[key] = 4;

                        existingLines[key] = {
                            startX: startX,
                            startY: startY,
                            endX: mouseX,
                            endY: mouseY,
                            StrokeColor: 'black'
                        };
                    }
                }
                isDrawing = false;
            }
            draw();
        }
    }
}

function onmousemove(e) {
    mouseX = e.clientX - bounds.left;
    mouseY = e.clientY - bounds.top;

    if (isDrawing) {
        draw();
    }
}
//canvas functions END