var leagues = [
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue1.svg",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/ro/a/aa/Serie_A.svg",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eredivisie_nieuw_logo_2017-.svg",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Liga_NOS_logo_white.svg",
  },
  {
    "emblemUrl": "https://www.sportsvideo.org/new/wp-content/uploads/2018/10/LaLiga-300x300.png",
  },
  {
    "emblemUrl": "https://upload.wikimedia.org/wikipedia/sco/6/67/2018_FIFA_World_Cup.svg",
  },
];
var degrees = 360 / leagues.length;

// PRINT
function printCarousel() {
  // creates the main container and adds every image
  for (x = 0; x < leagues.length; x++) {
    var emblemContainer = document.createElement('div');
    emblemContainer.className = "carousel__cell";

    var emblemImg = document.createElement("img");
    emblemImg.src = leagues[x].emblemUrl;
    emblemImg.className = "emblem__img";
    emblemContainer.appendChild(emblemImg);

    emblemContainer.style.transform = 'rotateY(  ' + x * degrees + 'deg) translateZ( ' + leagues.length * 28 + 'px)';

    document.getElementById('main').appendChild(emblemContainer);
  }
  // adds the opacity rules only for the ones that need to be visible
  document.querySelectorAll('.carousel__cell')[0].style.opacity = 1;
  document.querySelectorAll('.carousel__cell')[1].style.opacity = 0.3;
  document.querySelectorAll('.carousel__cell')[2].style.opacity = 0.1;
  document.querySelectorAll('.carousel__cell')[leagues.length - 2].style.opacity = 0.1;
  document.querySelectorAll('.carousel__cell')[leagues.length - 1].style.opacity = 0.3;

}

// PREVIOUS
var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
  // removes all images
  document.querySelectorAll('.carousel__cell').forEach(function(a) {
    a.remove()
  })
  // takes the last item of the array and moves it at the begining to simulate the rotation
  var temp = leagues.pop();
  leagues.unshift(temp);

  printCarousel();
});

// NEXT
var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
  // removes all images
  document.querySelectorAll('.carousel__cell').forEach(function(a) {
    a.remove()
  })
  // takes the first item of the array and moves it at the end to simulate the rotation
  var temp = leagues.shift();
  leagues.push(temp);
  // prints the carousel again
  printCarousel();
});
// prints the default carousel
printCarousel();
