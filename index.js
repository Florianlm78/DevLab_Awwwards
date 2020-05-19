

let  menuModal = document.getElementById('menuModal'),
burgerMenu = document.getElementById('burgerMenuBtn'),
navbarMenu = document.getElementById('navbarMenu'),
progressBar = document.getElementById("progressBar"),
menuTimeline = new TimelineMax({paused:true});


// ####### Navbar 

menuTimeline.to('#progressBar', 0.4, {
height: "100vh",
opacity: "1",
ease: Expo.easeInOut
})

menuTimeline.to('.menu', 0.5, {
width: "100vw",        
ease: Expo.easeInOut
})

menuTimeline.to('#ml1', 0.2, {
delay: "0",
y: "0",
opacity: "1",
ease: Expo.easeInOut
})

menuTimeline.to('#ml2', 0.4, {
y: "0",
opacity: "1",
ease: Expo.easeInOut
})


menuTimeline.to('#ml3', 0.3, {
y: "0",
opacity: "1",
ease: Expo.easeInOut
})


menuTimeline.to('#ml4', 0.2, {
  y: "0",
  opacity: "1",
  ease: Expo.easeInOut
})

preloaderAnimation = new TimelineMax({paused:true});


preloaderAnimation.to('#preloaderTxt', 1, {
  y: "-10px",
  opacity: "0",
  ease: Expo.easeInOut
},"end")

preloaderAnimation.to('.l-preloader', 2.3, {
  x: "-100vw",
  ease: Expo.easeInOut
} ,"end")

preloaderAnimation.to('.r-preloader', 2.3, {
  x: "100vw",
  ease: Expo.easeInOut
}, "end")

preloaderAnimation.to('.home-bg', 1.5, {
  opacity: "1",
  ease: Expo.easeInOut
},"end")

preloaderAnimation.to('#preloader', 2, {
  display: "none"
})

try {
  window.addEventListener("load", () => {
      preloaderAnimation.play()
  })
  } catch {
    console.log("pas de loader");
  }


burgerMenu.onclick = function() {

if (!burgerMenu.classList.contains("open")) {    
   
    menuModal.style.display = 'block';
    burgerMenu.classList.toggle('open');
    console.log('click');
    menuTimeline.play();


    } else {

    burgerMenu.classList.remove('open');
    menuTimeline.reverse();
    }
}


// ###### Galerie


let draggableImg = document.getElementById('draggableImg');
let draggableImg2 = document.getElementById('draggableImg2');
let draggableImg3 = document.getElementById('draggableImg3');

function RandomPosition(max) {  
    return Math.floor(Math.random() * Math.floor(max));
}


draggableImg.style.transform = "translateY(" + RandomPosition(10) + "vw) translateX(" + RandomPosition(35) + "vw)";
draggableImg2.style.transform = "translateY(" + RandomPosition(2) + "vw) translateX(" + RandomPosition(80) + "vw)";
draggableImg3.style.transform = "translateY(" + RandomPosition(15) + "vw) translateX(" + RandomPosition(40) + "vw)";
draggableImg4.style.transform = "translateY(" + RandomPosition(20) + "vw) translateX(" + RandomPosition(70) + "vw)";
draggableImg5.style.transform = "translateY(" + RandomPosition(6) + "vw) translateX(" + RandomPosition(20) + "vw)";
draggableImg6.style.transform = "translateY(" + RandomPosition(8) + "vw) translateX(" + RandomPosition(20) + "vw)";


dragElement(document.getElementById("draggableImg"));
dragElement(document.getElementById("draggableImg2"));
dragElement(document.getElementById("draggableImg3"));
dragElement(document.getElementById("draggableImg4"));
dragElement(document.getElementById("draggableImg5"));
dragElement(document.getElementById("draggableImg6"));

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id + "header")) {
document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
e = e || window.event;
e.preventDefault();
pos3 = e.clientX;
pos4 = e.clientY;
document.onmouseup = closeDragElement;
document.onmousemove = elementDrag;
}

function elementDrag(e) {
e = e || window.event;
e.preventDefault();

pos1 = pos3 - e.clientX;
pos2 = pos4 - e.clientY;
pos3 = e.clientX;
pos4 = e.clientY;

elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {

document.onmouseup = null;
document.onmousemove = null;
}
}

// ###### Animation on Scroll

let width = document.body.clientWidth

const animation = () => {

let scroll = window.scrollX
let hauteurFenetre = window.innerHeight;
let pourcentage = scroll * 100 / (width - hauteurFenetre)

console.log(pourcentage)
console.log(window.scrollX)

}

let container = document.getElementById("container");
// window.addEventListener("scroll", animation);

let checkMarker = false;

window.onload = () => {

window.addEventListener("scroll", () => {
      let scrollLargeur = document.documentElement.scrollWidth - window.innerWidth
      let position = window.scrollX
      let largeur = document.documentElement.clientWidth
      let barre = position / scrollLargeur * largeur
      let barrePourcentage =  ( barre * 100 ) / largeur

      if ( barrePourcentage > 6) {
        document.getElementById("numPartOneBg").style.transform = "scale("  + Math.sqrt(barrePourcentage/6) + ")";
        
      } else {
        document.getElementById("numPartOneBg").style.transform = "scale(" + 1 + ")";
      }
      // console.log(1 + Math.sqrt(barrePourcentage/100))
      
     scrollTriggerOnes = () => {
      
     
      console.log(checkMarker);
      if( barrePourcentage > 5 && checkMarker === false ) {

            checkMarker = true;
            console.log(checkMarker);
            setTimeout(compteur, delta);
            setTimeout(compteur2, delta2);
            setTimeout(compteur3, delta3);
            setTimeout(compteur4, delta4);
            setTimeout(compteur5, delta5);
      }


      }
      scrollTriggerOnes()

      console.log(barrePourcentage);
      
      progressBar.style.height = barrePourcentage +"vh";
})
}




// ------------------------- Comteur chiffre 1 --------------------------

var duree = 1;
var duree_3 = 2;

var nombre_1 = 780000;
var nombre_2 = 1600;
var nombre_3 = 45;
var nombre_4 = 500;
var nombre_5 = 92;

var debutCompteur = 779700;
var debutCompteur2 = 1300;
var debutCompteur3 = 0;
var debutCompteur4 = 200;
var debutCompteur5 = 20;

var delta = Math.ceil((duree * 1000) / nombre_1);
var delta2 = Math.ceil((duree * 1000) / nombre_2);
var delta3 = Math.ceil((duree_3 * 1000) / nombre_3);
var delta4 = Math.ceil((duree * 1000) / nombre_4);
var delta5 = Math.ceil((duree_3 * 1000) / nombre_5);

var valeur_1 = document.getElementById("num-information-nb-1");
var valeur_2 = document.getElementById("num-information-nb-2");
var valeur_3 = document.getElementById("num-information-nb-3");
var valeur_4 = document.getElementById("num-information-nb-4");
var valeur_5 = document.getElementById("num-information-nb-5");

function compteur(){
  valeur_1.innerHTML = ++debutCompteur;
  if( debutCompteur < nombre_1 ) { 
    setTimeout(compteur, delta);
 }
}

function compteur2(){
  valeur_2.innerHTML = ++debutCompteur2;
  if( debutCompteur2 < nombre_2 ) { 
    setTimeout(compteur2, delta2);
 }
}

function compteur3(){
  valeur_3.innerHTML = ++debutCompteur3 + " ANS";
  if( debutCompteur3 < nombre_3 ) { 
    setTimeout(compteur3, delta3);
 }
}


function compteur4(){
  valeur_4.innerHTML = ++debutCompteur4;
  if( debutCompteur4 < nombre_4 ) { 
    setTimeout(compteur4, delta4);
 }
}

function compteur5(){
  valeur_5.innerHTML = ++debutCompteur5 + "%";
  if( debutCompteur5 < nombre_5 ) { 
    setTimeout(compteur5, delta5);
 }
}


