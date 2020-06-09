const engBtn = document.querySelector('.eng');
const plBtn = document.querySelector('.pl');
const polish = document.querySelectorAll('.polish');
const english = document.querySelectorAll('.english');



plBtn.addEventListener('click', () => {
    polish.forEach(pl => {
        pl.style.display = "block";
    })
    english.forEach(eng => {
        eng.style.display = "none";
    })
});

engBtn.addEventListener('click', () => {
    english.forEach(eng => {
        eng.style.display = "block";
    })
    polish.forEach(pl => {
        pl.style.display = "none";
    })
});