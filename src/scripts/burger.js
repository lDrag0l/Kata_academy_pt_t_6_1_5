const burgerMenu = document.querySelector('.Mobile-menu')

const burgerMenuOpenButton = document.querySelector('.Round-icon--on')
const butgerMenuCloseButton = burgerMenu.querySelector('.Round-icon--off')

const burgerMenuBackDrop = document.querySelector('.Mobile-menu__backdrop')

burgerMenuOpenButton.addEventListener('click', function () {
    burgerMenu.style.display = 'flex';
    burgerMenuOpenButton.style.display = 'none';
    burgerMenuBackDrop.style.display = 'block'
})

butgerMenuCloseButton.addEventListener('click', function () {
    burgerMenu.style.display = 'none';
    burgerMenuOpenButton.style.display = 'block';
    burgerMenuBackDrop.style.display = 'none'
})

burgerMenuBackDrop.addEventListener('click', function () {
    let width = document.body.clientWidth;
    if (width > 1439) {
        burgerMenuBackDrop.style.display = 'none'
    }
    else {
        burgerMenu.style.display = 'none';
        burgerMenuOpenButton.style.display = 'block';
        burgerMenuBackDrop.style.display = 'none'
    }
})
