const allBtn = document.querySelector('.all');
const htmlBtn = document.querySelector('.html');
const cssBtn = document.querySelector('.css');
const jsBtn = document.querySelector('.js');
const htmlItems = document.querySelectorAll('.html-item');
const cssItems = document.querySelectorAll('.css-item');
const jsItems = document.querySelectorAll('.js-item');

allBtn.addEventListener('click', () => {
    htmlItems.forEach(html => {
        html.style.display = "block";
    });
    cssItems.forEach(css => {
        css.style.display = "block";
    });
    jsItems.forEach(js => {
        js.style.display = "block";
    })
})

htmlBtn.addEventListener('click', () => {
    htmlItems.forEach(html => {
        html.style.display = "block";
    });
    cssItems.forEach(css => {
        css.style.display = "none";
    });
    jsItems.forEach(js => {
        js.style.display = "none";
    })
})

cssBtn.addEventListener('click', () => {
    htmlItems.forEach(html => {
        html.style.display = "none";
    });
    cssItems.forEach(css => {
        css.style.display = "block";
    });
    jsItems.forEach(js => {
        js.style.display = "none";
    })
})

jsBtn.addEventListener('click', () => {
    htmlItems.forEach(html => {
        html.style.display = "none";
    });
    cssItems.forEach(css => {
        css.style.display = "none";
    });
    jsItems.forEach(js => {
        js.style.display = "block";
    })
})
