//тень формы
const modalBackDrop = document.querySelector('.modalBackdrop')

//формы
const modalCall = document.querySelector('.modal-call')

const modalCallForm = modalCall.querySelector('form')
const modalCallCloseButton = modalCall.querySelector('.Button__burger-off')

//кнопка закрытия
modalCallCloseButton.addEventListener('click', function () {
    modalCall.style.display = "none";
    modalBackDrop.style.display = "none"
})

//Кнопки открытия
const modalCallOpenButtons = document.querySelectorAll('.Button__call')

for (let i = 0; i < modalCallOpenButtons.length; i++) {
    modalCallOpenButtons[i].addEventListener('click', function () {
        modalCall.style.display = "block";
        modalBackDrop.style.display = "block"
    })
}


const modalFeedBack = document.querySelector('.modal-feedback')

const modalFeedBackForm = modalFeedBack.querySelector('form')
const modalFeedBackCloseButton = modalFeedBack.querySelector('.Button__burger-off')

//кнопка закрытия
modalFeedBackCloseButton.addEventListener('click', function () {
    modalFeedBack.style.display = "none";
    modalBackDrop.style.display = "none"
})

const modalFeedBackOpenButtons = document.querySelectorAll('.Button__message')

//Кнопки открытия
for (let i = 0; i < modalFeedBackOpenButtons.length; i++) {
    modalFeedBackOpenButtons[i].addEventListener('click', function () {
        modalFeedBack.style.display = "block";
        modalBackDrop.style.display = "block"
    })
}

modalBackDrop.addEventListener('click', function () {
    modalFeedBack.style.display = 'none'
    modalCall.style.display = 'none'
    modalBackDrop.style.display = 'none'
})


//Для удобства выключаем формы
modalCallForm.addEventListener('click', function (el) {
    el.preventDefault();
})

modalFeedBackForm.addEventListener('click', function (el) {
    el.preventDefault();
})