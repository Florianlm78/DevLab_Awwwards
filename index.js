

let  menuModal = document.getElementById('menuModal'),
     burgerMenu = document.getElementById('burgerMenuBtn'),
     navbarMenu = document.getElementById('navbarMenu'),
     progressBar = document.getElementById("progressBar"),
     menuTimeline = new TimelineMax({paused:true});


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
  // delay: "0.3",
  y: "0",
  opacity: "1",
  ease: Expo.easeInOut
})


menuTimeline.to('#ml3', 0.3, {
  // delay: "0.4",
  y: "0",
  opacity: "1",
  ease: Expo.easeInOut
})


menuTimeline.to('#ml4', 0.2, {
  // delay: "0.6",
  y: "0",
  opacity: "1",
  ease: Expo.easeInOut
})




    

burgerMenu.onclick = function() {

  if (!burgerMenu.classList.contains("open")) {    
        
    menuModal.style.display = 'block';
    burgerMenu.classList.toggle('open');
    console.log('click');
    menuTimeline.play();
    // progressBar.style.height = 100 +"vh";

} else {
    
    burgerMenu.classList.remove('open');
    menuTimeline.reverse();
}
}





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


let width = document.body.clientWidth

const animation = () => {

    let scroll = window.scrollX
    let hauteurFenetre = window.innerHeight;
    let pourcentage = scroll * 100 / (width - hauteurFenetre)

    console.log(pourcentage)
    console.log(window.scrollX)

}

// window.addEventListener("scroll", animation);


window.onload = () => {
  
  window.addEventListener("scroll", () => {
      let scrollLargeur = document.documentElement.scrollWidth - window.innerWidth
      let position = window.scrollX
      let largeur = document.documentElement.clientWidth
      let barre = position / scrollLargeur * largeur
      let barrePourcentage =  ( barre * 100 ) / largeur

      if ( barrePourcentage > 6) {
        document.getElementById("numPartOneBg").style.transform = "scale(" + barrePourcentage/4 + ")";
        
      } else {
        document.getElementById("numPartOneBg").style.height = "scale(" + 0 + ")";
      }

      console.log(barrePourcentage)
      progressBar.style.height = barrePourcentage +"vh";
  })
}




/*
var item = document.getElementsByTagName('BODY')[0];

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});
*/