export function mainPageCard1 (cards,MainPage){

MainPage.mainPageCards.forEach((card,index )=> {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute('class', 'card ')
    const img = document.createElement("img");
    const img2 = document.createElement('img');
    const h3 = document.createElement("h3");
    // creating download button for cards
    const downloadCont = document.createElement('div')
    downloadCont.setAttribute('class','downloadCont')
    const download = document.createElement('img')
    download.setAttribute('class', 'downloadBtn')

    download.src = './static/images/icons/download.svg'
    download.alt = 'download-btn'
    img.src = card.img;
    img2.src = card.img2;
    img2.alt = card.title;
    img.alt = card.title;
    h3.textContent = card.title;

     // Add different classes to each h3 element based on the card index
    if (index === 0) {
      h3.setAttribute('class', 'card-title-1-2');
    } else if (index === 2) {
      h3.setAttribute('class', 'card-title-1-2');
    }
    
        // Add different classes to each img2 element based on the card index
        if (index === 0) {
          img2.setAttribute('class', 'absolute-first');
          img2.src = card.img2;
        } else if (index === 1) {
          img2.setAttribute('class', 'absolute-second');
          img2.src = card.img2;
        } else if (index === 2) {
          img2.setAttribute('class', 'absolute-third');
          img2.src = card.img2;
        } else if (index === 3) {
          img2.setAttribute('class', 'absolute-fourth');
          img2.src = card.img2;
        } else if (index === 4) {
          img2.setAttribute('class', 'absolute-fifth');
          img2.src = card.img2;
        }else{
          img2.setAttribute('class', 'absolute-sixth');
          img2.src = card.img2;
        }
  
    cardDiv.append(img.cloneNode(true));
    cardDiv.append(img2.cloneNode(true));
    cardDiv.append(h3.cloneNode(true));
    downloadCont.append(download);
    cardDiv.append(downloadCont)

    cards.append(cardDiv);
  });
}
import { tavpurceli } from './tavpurceli.js';

// Getting references to DOM elements
const mainSvg = document.querySelector('.mainSvg');
const aboutProject = document.querySelector('.about-project');
const header = document.querySelector('.header');
// Creating a new <h3> element to be appended to header
const aboutProjecttitle = document.createElement('h3')
aboutProjecttitle.setAttribute('class','test')
aboutProjecttitle.textContent = 'პროექტის შესახებ'

// Adding click event listener to aboutProject element
aboutProject.addEventListener('click', () => {
  // Appending aboutProjecttitle to header element
  header.append(aboutProjecttitle);
  aboutProject.classList.add('hide');
  
  // Inserting a new <div> element after mainSvg
  mainSvg.insertAdjacentHTML('afterend', `<div class="homeSvg">
   <img src="./static/images/icons/01_home.svg" alt="icon">
   <h3>თავფურცელი</h3>
   </div>`);

  // Replacing innerHTML of mainPageCards with a new <div> element
  const mainPageCards = document.querySelector('.main-page-cards');
  const newContent = `
    <div class="new-container">
    </div>
  `;
  mainPageCards.innerHTML = newContent;

  // Getting reference to the new container
  const newContainer = document.querySelector('.new-container');

  // Using requestAnimationFrame to apply styles after an element is displayed 
  window.requestAnimationFrame(() => {
    const homeSvg = document.querySelector('.homeSvg');
    homeSvg.style.backgroundColor = '#C1D4D6';
  });

  // Iterating over tavpurceli array and creating a new <div> element for each item
  tavpurceli.forEach((item) => {
    const dataElement = document.createElement('p');
    dataElement.textContent = Object.values(item)[0]; // This will get the value of the first key in each object
      // Get the first word of the textContent
  const firstWord = dataElement.textContent.split(' ')[0];

  // Wrap the first word in a span with a specific class
  const formattedText = `<span class="first-word">${firstWord}</span> ${dataElement.textContent.slice(firstWord.length)}`;

  // Set the formattedText as the textContent of the element
  dataElement.innerHTML = formattedText;

    newContainer.appendChild(dataElement);
  });
});






