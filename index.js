const menuModal = document.getElementById('menuModal');
const burgerMenu = document.getElementById('burgerMenuBtn');


burgerMenu.onclick = function() {
    
    if (menuModal.style.display != 'block') {    
        menuModal.style.display = 'block';
        burgerMenu.classList.toggle('open');
    
        TweenMax.to('#ml1', 2, {
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        TweenMax.to('#ml2', 2, {
            delay: "0.3",
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        
        TweenMax.to('#ml3', 2, {
            delay: "0.7",
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        
        TweenMax.to('#ml4', 2, {
            delay: "1",
            y: "0",
            opacity: "1",
            ease: Expo.easeInOut
        })

        
    } else {
          menuModal.style.display = 'none';
          burgerMenu.classList.remove('open');
}
}