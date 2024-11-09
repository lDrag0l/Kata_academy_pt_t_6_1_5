const burgerMenu = document.querySelector('.Mobile-menu')

const burgerMenuOpenButton = document.querySelector('.Button__burger-on')
const butgerMenuCloseButton = burgerMenu.querySelector('.Button__burger-off')

const burgerMenuBackDrop = document.querySelector('.burgerMenuBackDrop')

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
