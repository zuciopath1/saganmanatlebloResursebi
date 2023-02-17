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
const mainSvg = document.querySelector('.mainSvg');
const aboutProject = document.querySelector('.about-project');
const header = document.querySelector('.header');
const aboutProjecttitle = document.createElement('h3')
aboutProjecttitle.setAttribute('class','test')
aboutProjecttitle.textContent = 'პროექტის შესახებ'

aboutProject.addEventListener('click', () => {
  header.append(aboutProjecttitle);
  aboutProject.classList.add('hide');
  // inserting div-container with homeSvg icon with its title 
  // Using requestAnimationFrame to apply styles after an element is displayed 
  mainSvg.insertAdjacentHTML('afterend', `<div class="homeSvg">
   <img src="./static/images/icons/01_home.svg" alt="icon">
   <h3>თავფურცელი</h3>
   </div>`);
   const mainPageCards = document.querySelector('.main-page-cards');
   const newContent = `
  <div class="new-container">
    <p class='about-project-text'>მოემზადე: ამ განყოფილებაში განთავსებული 
    მოკლე ტექსტი რომელიც გააცნობს მოსწავლეს 
    ძირიტად თემას, საკითხს. ასევე თემასთან 
    დაკავშირებული კითხვები; წაიკითხე: ამ განყოფილებაში 
    განთავსებული იქნება მოკლე მოთხრეობა; უპასუხე: მას შემდეგი 
    რაც ბაშვები მოთხრობაში მოცემულ საკითხებს გაეცნობიან
     მასწავლებლელი ამ საკითხებთან დაკავშირებით კითხვა 
     პასუხის რეჟიმში იმუშავებს. ძირითადი კითხვები ამ 
     განყოფილებაში იქნება მოცემული; შეავსე: ამ განყოფილებაში 
     სამი ინტერაქტიული დავალება იქნება მოცემული; შექმენი:
      ბოლო განყოფილებაში მოსწავლეს თემასთან დაკავშირებული 
      პროექტი ექნება შესაქმნელი რომელიც მოსწავლეს სხვადასხვა,
       მათ შორის შემოქმედებითი უნარების განვითარებსი შესაძლებლობა 
       ექნება. მასწავლებელს შესაძებელი ექნება რესწურსთან
        პროექტორის საშუალებით მთელ კლასთან ერთად იმუშაოს, 
        მოსწავლეებს საშუალება მისცეს ინდივიდუალლურად
         იმუშაონ რესურსზე, ან ელექტრონული რესურსის ცალკეული 
         დავალების დასაბეჭდი ვერსია ამობეჭდოს და მოსწავლეები 
         ჯგუფურად ან ინდივიდუალურად ამუშაოს ნაბეჭდ ვერსიაზე
         .</p>
  </div>
`;
mainPageCards.innerHTML = newContent;

  window.requestAnimationFrame(() => {
    const homeSvg = document.querySelector('.homeSvg');
    homeSvg.style.backgroundColor = '#C1D4D6';
  });
  // 
});






