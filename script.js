// largest container used at upper bound
const fontContainer = document.querySelector('.left');

// overlay text
const variableFontSize = document.querySelectorAll('.inner-text');

// width of largest container
let width = fontContainer.offsetWidth;

// resizes overlay text
function resizeText(width, variableFontSize) {
    width = fontContainer.offsetWidth;
    if (width < 200) {
        variableFontSize.style.fontSize = '6px';
        variableFontSize.style.lineHeight = '12px'
    } else if (width > 200 && width < 300) {
        variableFontSize.style.fontSize = '7px';
        variableFontSize.style.lineHeight = '20px'
    } else if (width > 300 && width < 400) {
        variableFontSize.style.fontSize = '10px';
        variableFontSize.style.lineHeight = '35px'
    } else if (width > 400 && width < 500) {
        variableFontSize.style.fontSize = '12px';
        variableFontSize.style.lineHeight = '45px'
    } else if (width > 500 && width < 650) {
        variableFontSize.style.fontSize = '18px';
        variableFontSize.style.lineHeight = '50px'
    } else if (width > 650 && width < 800) {
        variableFontSize.style.fontSize = '22px';
        variableFontSize.style.lineHeight = '70px'
    } else if (width > 800 && width < 1000) {
        variableFontSize.style.fontSize = '26px';
        variableFontSize.style.lineHeight = '70px'
    } else if (width > 1000 && width < 1200) {
        variableFontSize.style.fontSize = '30px';
        variableFontSize.style.lineHeight = '80px'
    }
}

// page initialization resize
addEventListener('load', (event) => {
    variableFontSize.forEach(variableFontSize => {
        resizeText(width, variableFontSize);
    });
})

// resizes overlay text on every window resize
addEventListener('resize', (event) => {
    variableFontSize.forEach(variableFontSize => {
        resizeText(width, variableFontSize);
    });
})