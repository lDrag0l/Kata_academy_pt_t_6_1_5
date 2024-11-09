//элементы первого слайдера
const button = document.querySelector('.Repair-section__button')
const repairSection = document.querySelector('.Repair-section')
const repairSectionContainer = repairSection.querySelector('.swiper-container')

//элементы второго слайдера
const buttonSecond = document.querySelector('.Repair-second__button')
const repairSectionSecond = document.querySelector('.Repair-second')
const repairSectionContainerSecond = repairSectionSecond.querySelector('.swiper-container')

//eventlistener первого слайдера
button.addEventListener('click', function () {

    if (repairSectionContainer.style.height != "100%") {
        repairSectionContainer.style.height = "100%";
        button.classList.add('Repair-section_button__rotate')
        button.textContent = 'Скрыть'
    }
    else {
        button.classList.remove('Repair-section_button__rotate')
        repairSectionContainer.style.height = "160px"
        button.textContent = 'Показать все'
    }
})

//eventlistener второго слайдера
buttonSecond.addEventListener('click', function () {

    if (repairSectionContainerSecond.style.height != "100%") {
        repairSectionContainerSecond.style.height = "100%";
        buttonSecond.classList.add('Repair-second_button__rotate')
        buttonSecond.textContent = 'Скрыть'
    }
    else {
        buttonSecond.classList.remove('Repair-second_button__rotate')
        repairSectionContainerSecond.style.height = "160px"
        buttonSecond.textContent = 'Показать все'
    }
})

//фикс резайза первого слайдера
window.addEventListener('resize', function () {
    let width = document.body.clientWidth;
    if (width < 768) {
        repairSectionContainer.style.height = "130px";
    }
    else {
        repairSectionContainer.style.height = "160px";
    }
})

//фикс резайза второго слайдера
window.addEventListener('resize', function () {
    let width = document.body.clientWidth;
    if (width < 768) {
        repairSectionContainerSecond.style.height = "180px";
    }
    else {
        repairSectionContainerSecond.style.height = "160px";
    }
})

window.addEventListener('DOMContentLoaded', function () {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }
    //инициализация первого слайдера
    resizableSwiper(
        '(max-width: 767px)',
        '.swiper-1',
        {
            spaceBetween: 16,
            slidesPerView: 1,
            width: 240,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
    );

    //инициализация второго слайдера
    resizableSwiper(
        '(max-width: 767px)',
        '.swiper-2',
        {
            spaceBetween: 16,
            slidesPerView: 1,
            width: 240,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
    );

    //инициализация третьего слайдера
    resizableSwiper(
        '(max-width: 767px)',
        '.swiper-3',
        {
            spaceBetween: 16,
            slidesPerView: 1,
            width: 260,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
    );

});


