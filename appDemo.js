const menuModal = document.getElementById('menuModal');
const burgerMenu = document.getElementById('burgerMenuBtn');


var menuTimeline = new TimelineMax();

burgerMenu.onclick = function() {
    
    if (menuModal.style.display != 'block') {    
        menuModal.style.display = 'block';
        burgerMenu.classList.toggle('open');
    
        TweenMax.to('#ml1', 1, {
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        TweenMax.to('#ml2', 1, {
            delay: "0.3",
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        
        TweenMax.to('#ml3', 1, {
            delay: "0.7",
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        
        TweenMax.to('#ml4', 1, {
            delay: "1",
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        
        TweenMax.to('.menu', 1, {
            width: "100%",        
            ease: Expo.easeInOut
        })

        
    } else {
          menuModal.style.display = 'none';
          burgerMenu.classList.remove('open');
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


// Demo

burgerMenu.onclick = function() {
  var menuTimeline = new TimelineMax();

     menuTimeline.to('.menu', 0.25, {
          width: "0%",        
          ease: Expo.easeInOut
      })
  
  if (burgerMenu.classList.contains("open")) {    
   
      //   menuModal.style.display = 'none';
        burgerMenu.classList.remove('open');
      

  } else {
      menuModal.style.display = 'block';
      burgerMenu.classList.toggle('open');
  
      menuTimeline.to('.menu', 1, {
          width: "100%",        
          ease: Expo.easeInOut
      })
      
      menuTimeline.to('menu-content li', 0.25, {
          y: "0",
          opacity: "1",
          ease: Expo.easeInOut
      })

      menuTimeline.to('#ml2', 0.25, {
          delay: "0.3",
          y: "0",
          opacity: "1",
          ease: Expo.easeInOut
      })

      
      menuTimeline.to('#ml3', 0.25, {
          delay: "0.7",
          y: "0",
          opacity: "1",
          ease: Expo.easeInOut
      })

    
      menuTimeline.to('#ml4', 0.25, {
          delay: "1",
          y: "0",
          opacity: "1",
          ease: Expo.easeInOut
      })

      
      menuTimeline.to('.menu', 0.25, {
          width: "100%",        
          ease: Expo.easeInOut
      })


}
}