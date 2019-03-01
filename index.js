// var leagues = [
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue1.svg",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/ro/a/aa/Serie_A.svg",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eredivisie_nieuw_logo_2017-.svg",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Liga_NOS_logo_white.svg",
//   },
//   {
//     "emblemUrl": "https://www.sportsvideo.org/new/wp-content/uploads/2018/10/LaLiga-300x300.png",
//   },
//   {
//     "emblemUrl": "https://upload.wikimedia.org/wikipedia/sco/6/67/2018_FIFA_World_Cup.svg",
//   }
// ];
// var carousel = document.querySelector('.carousel');
// var cells = leagues.length;
// var selectedIndex = 0;
// var arrayIndex = 0;
// var cellWidth = carousel.offsetWidth;
// var radius, theta;
// var degrees = 360 / leagues.length;
// var nextCount = false;
// var prevCount = false;


// for (x = 0; x < leagues.length; x++) {
//   var emblemContainer = document.createElement('div');
//   emblemContainer.className = "carousel__cell";

//   var emblemImg = document.createElement("img");
//   emblemImg.src = leagues[x].emblemUrl;
//   emblemImg.className = "emblem__img";
//   emblemContainer.appendChild(emblemImg);

//   emblemContainer.style.transform = 'rotateY(  ' + x * degrees + 'deg) translateZ(288px)';

//   document.getElementById('main').appendChild(emblemContainer);
// }


// document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
// document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 0.3;
// document.querySelectorAll('.carousel__cell')[arrayIndex + 2].style.opacity = 0.1;
// document.querySelectorAll('.carousel__cell')[leagues.length - (arrayIndex + 2)].style.opacity = 0.1;
// document.querySelectorAll('.carousel__cell')[leagues.length - (arrayIndex + 1)].style.opacity = 0.3;

// // ROTATE
// function rotateCarousel() {
//   theta = 360 / cells;
//   var angle = theta * selectedIndex * -1;
//   var cellSize = cellWidth;
//   radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cells));
//   carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
//     'rotateY' + '(' + angle + 'deg)';
// }

// // PREVIOUS
// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener('click', function () {
//   selectedIndex--;
//   arrayIndex--;
//   if (arrayIndex === -1) arrayIndex = leagues.length - 1;
//   if (arrayIndex === -2) arrayIndex = leagues.length - 2;

//   console.log('arrayIndex', arrayIndex);
//   console.log('prevCount', prevCount);

//   var emblems = document.getElementsByClassName('carousel__cell');
//   for (i = 0; i < emblems.length; i++) {
//     emblems[i].style.opacity = 0;
//   }

//   if (arrayIndex === 9) {
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[0].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[1].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 2].style.opacity = 0.1;
//   } else if (arrayIndex === 8) {
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[0].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 2].style.opacity = 0.1;
//   } else if (arrayIndex === 1) {
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[0].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 1].style.opacity = 0.1;
//   } else if (arrayIndex === 0) {
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[2].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 2].style.opacity = 0.1;
//     // reset
//     arrayIndex = leagues.length;
//   } else {
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 2].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 2].style.opacity = 0.1;
//   }
//   // move it
//   rotateCarousel();
// });

// // NEXT
// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener('click', function () {
//   selectedIndex++;
//   arrayIndex++;
//   if (arrayIndex >= (leagues.length - 1)) nextCount = true;
//   if (arrayIndex === (leagues.length + 1)) arrayIndex = 1;
//   console.log('arrayIndex', arrayIndex);
//   console.log('nextCount', nextCount);

//   var emblems = document.getElementsByClassName('carousel__cell');
//   for (i = 0; i < emblems.length; i++) {
//     emblems[i].style.opacity = 0;
//   }
//   if (arrayIndex !== (leagues.length - 1) && arrayIndex !== (leagues.length - 2) && arrayIndex !== leagues.length) {
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 2].style.opacity = 0.1;
//     // left
//     if (arrayIndex === 0) {
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 1].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 2].style.opacity = 0.1;
//     } else if (arrayIndex === 1) {
//       console.log('its 1');
//       document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 1].style.opacity = 0.1;
//     } else {
//       document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[arrayIndex - 2].style.opacity = 0.1;
//     }
//   }
//   else if (arrayIndex === (leagues.length - 2) && nextCount === false) {
//     console.log('inside nextCount false');
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[0].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 1].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 2].style.opacity = 0.1;
//     // resets
//     nextCount = true;
//     arrayIndex = (leagues.length - 3);
//   }
//   // special case when changing directions form first to last
//   else if (arrayIndex > (leagues.length - 2) && nextCount === true) {
//     console.log('inside nextCount true', arrayIndex);
//     if (arrayIndex === leagues.length) {
//       arrayIndex = (leagues.length - 2);
//       console.log('inside ultim', arrayIndex);
//       // center
//       document.querySelectorAll('.carousel__cell')[0].style.opacity = 1;
//       // right
//       document.querySelectorAll('.carousel__cell')[1].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[2].style.opacity = 0.1;
//       // left
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 1].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 2].style.opacity = 0.1;
//       // resets
//       arrayIndex = 0;
//     }
//     if (arrayIndex === (leagues.length - 1)) {
//       arrayIndex = (leagues.length - 2);
//       console.log('inside penultim', arrayIndex);
//       // center
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 1].style.opacity = 1;
//       // right
//       document.querySelectorAll('.carousel__cell')[0].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[1].style.opacity = 0.1;
//       // left
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 2].style.opacity = 0.3;
//       document.querySelectorAll('.carousel__cell')[document.querySelectorAll('.carousel__cell').length - 3].style.opacity = 0.1;
//       // resets
//       arrayIndex = -1;
//     }
//     nextCount = false;
//   }
//   else if (arrayIndex === (leagues.length - 2) && nextCount === true) {
//     console.log('inside nextCount true', arrayIndex);
//     if (arrayIndex === leagues.length) {
//       arrayIndex = (leagues.length - 2);
//     }
//     console.log('inside nextCount true', arrayIndex);
//     // center
//     document.querySelectorAll('.carousel__cell')[arrayIndex + 1].style.opacity = 1;
//     // right
//     document.querySelectorAll('.carousel__cell')[0].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[1].style.opacity = 0.1;
//     // left
//     document.querySelectorAll('.carousel__cell')[arrayIndex].style.opacity = 0.3;
//     document.querySelectorAll('.carousel__cell')[arrayIndex - 2].style.opacity = 0.1;
//     // resets
//     arrayIndex = -1;
//     nextCount = false;
//   }
//   // move it
//   rotateCarousel();
// });
