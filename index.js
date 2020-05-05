const menuModal = document.getElementById('menuModal');
const burgerMenu = document.getElementById('burgerMenuBtn');


burgerMenu.onclick = function() {
    
    if (menuModal.style.display != 'block') {    
        menuModal.style.display = 'block';
        menuModal.style.animation = 'rotate';
        burgerMenu.classList.toggle('open');

    } else {
          menuModal.style.display = 'none';
          burgerMenu.classList.remove('open');
          menuModal.style.animation = 'rotateInv';

}
}