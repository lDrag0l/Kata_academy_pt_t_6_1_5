const button = document.querySelector('.Repair-section__button')
const repairSection = document.querySelector('.Repair-section')
const repairSectionContainer = repairSection.querySelector('.swiper-container')

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
window.addEventListener('resize', function () {
    let width = document.body.clientWidth;
    if (width < 768) {
        repairSectionContainer.style.height = "130px";
    }
    else {
        repairSectionContainer.style.height = "160px";
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
});


