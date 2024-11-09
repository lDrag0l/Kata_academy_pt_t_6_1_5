const companyInfo = document.querySelector('.Company-info')


const companyInfoTextWrapper = companyInfo.querySelector('.Company-info__content-wrapper')
const companyInfoText = companyInfo.querySelector('.Company-info__content-text')
const companyInfoButton = companyInfo.querySelector('.Company-info__content-button')



companyInfoButton.addEventListener('click', function () {
    let width = document.body.clientWidth;

    if (width < 767 && companyInfoTextWrapper.style.height != '100%') {
        companyInfoTextWrapper.style.height = '100%'
        companyInfoText.style.height = '100%'
        companyInfoButton.textContent = 'Скрыть'
        companyInfoButton.classList.add('company-info__button-rotated')
    }
    else if (width < 767) {
        companyInfoTextWrapper.style.height = '130px'
        companyInfoText.style.height = '90px'
        companyInfoButton.textContent = 'Читать далее'
        companyInfoButton.classList.remove('company-info__button-rotated')
    }

    if ((width > 767 && width < 1139) && companyInfoTextWrapper.style.height != '100%') {
        companyInfoTextWrapper.style.height = '100%'
        companyInfoText.style.height = '100%'
        companyInfoButton.textContent = 'Скрыть'
        companyInfoButton.classList.add('company-info__button-rotated')
    }

    else if (width > 767 && width < 1139) {
        companyInfoTextWrapper.style.height = '160px'
        companyInfoText.style.height = '125px'
        companyInfoButton.textContent = 'Читать далее'
        companyInfoButton.classList.remove('company-info__button-rotated')
    }

    if (width > 1139 && companyInfoTextWrapper.style.height != '100%') {
        companyInfoTextWrapper.style.height = '100%'
        companyInfoText.style.height = '100%'
        companyInfoButton.textContent = 'Скрыть'
        companyInfoButton.classList.add('company-info__button-rotated')
    }

    else if (width > 1139) {
        companyInfoTextWrapper.style.height = '160px'
        companyInfoText.style.height = '140px'
        companyInfoButton.textContent = 'Читать далее'
        companyInfoButton.classList.remove('company-info__button-rotated')
    }

})