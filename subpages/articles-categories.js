const allBtn = document.querySelector('.all');
const reviewsBtn = document.querySelector('.rev');
const wellbeingBtn = document.querySelector('.well');
const effectBtn = document.querySelector('.effect');

// const reviewsItem = document.querySelectorAll('.rev-item');
// const wellbeingItem = document.querySelectorAll('.well-item');
// const effectItem = document.querySelectorAll('.effect-item');

allBtn.addEventListener('click', () => {
    reviewItems.forEach(rev => {
        rev.style.display = "block";
    });
    wellbeingItems.forEach(well => {
        well.style.display = "block";
    });
    effectItems.forEach(eff => {
        eff.style.display = "block";
    })
})

reviewsBtn.addEventListener('click', () => {
    reviewItems.forEach(rev => {
        rev.style.display = "block";
    });
    wellbeingItems.forEach(well => {
        well.style.display = "none";
    });
    effectItems.forEach(eff => {
        eff.style.display = "none";
    })
})

wellbeingBtn.addEventListener('click', () => {
    reviewItems.forEach(rev => {
        rev.style.display = "none";
    });
    wellbeingItems.forEach(well => {
        well.style.display = "block";
    });
    effectItems.forEach(eff => {
        eff.style.display = "none";
    })
})

effectBtn.addEventListener('click', () => {
    reviewItems.forEach(rev => {
        rev.style.display = "none";
    });
    wellbeingItems.forEach(well => {
        well.style.display = "none";
    });
    effectItems.forEach(eff => {
        eff.style.display = "block";
    })
})

