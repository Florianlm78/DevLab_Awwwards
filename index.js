

var  menuModal = document.getElementById('menuModal'),
       burgerMenu = document.getElementById('burgerMenuBtn'),
       navbarMenu = document.getElementById('navbarMenu'),
       menuTimeline = new TimelineMax({paused:true});

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

menuTimeline.to('#ml2', 0.2, {
  // delay: "0.3",
  y: "0",
  opacity: "1",
  ease: Expo.easeInOut
})


menuTimeline.to('#ml3', 0.2, {
  // delay: "0.4",
  y: "0",
  opacity: "1",
  ease: Expo.easeInOut
})


menuTimeline.to('#ml4', 0.2, {
  // delay: "0.2",
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

} else {

    burgerMenu.classList.remove('open');
    menuTimeline.reverse();
}
}



console.log(window.event);

dragElement(document.getElementById("draggableImg"));
dragElement(document.getElementById("draggableImg2"));

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
var item = document.getElementsByTagName('BODY')[0];

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});
