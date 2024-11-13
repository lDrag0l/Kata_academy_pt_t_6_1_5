//элементы первого слайдера
const repairSection = document.querySelector('.Repair-section')
const button = repairSection.querySelector('.Increase-content__button')
const repairSectionContainer = repairSection.querySelector('.swiper-container')

//элементы второго слайдера
const repairSectionSecond = document.querySelector('.Repair-second')
const buttonSecond = repairSectionSecond.querySelector('.Increase-content__button')
const repairSectionContainerSecond = repairSectionSecond.querySelector('.swiper-container')

//eventlistener первого слайдера
button.addEventListener('click', function () {

    if (repairSectionContainer.style.height != "100%") {
        repairSectionContainer.style.height = "100%";
        button.classList.add('Increase-content__button--rotated-true')
        button.textContent = 'Скрыть'
    }
    else {
        button.classList.remove('Increase-content__button--rotated-true')
        repairSectionContainer.style.height = "160px"
        button.textContent = 'Показать все'
    }
})

//eventlistener второго слайдера
buttonSecond.addEventListener('click', function () {

    if (repairSectionContainerSecond.style.height != "100%") {
        repairSectionContainerSecond.style.height = "100%";
        buttonSecond.classList.add('Increase-content__button--rotated-true')
        buttonSecond.textContent = 'Скрыть'
    }
    else {
        buttonSecond.classList.remove('Increase-content__button--rotated-true')
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


