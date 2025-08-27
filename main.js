const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const indicators = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const itemsLength = items.length;
let timer;

function showSlider() {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    items[active].classList.add('active');
    dots[active].classList.add('active');

    indicators.textContent = String(active + 1).padStart(2, '0');
}

function updateSlider(direction) {
    if (direction === 'next') {
        active = (active + 1) % itemsLength;
    } else if (direction === 'prev') {
        active = (active - 1 + itemsLength) % itemsLength;
    }
    showSlider();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        updateSlider('next');
    }, 5000);
}

nextBtn.addEventListener('click', () => {
    updateSlider('next');
    startTimer();
});

prevBtn.addEventListener('click', () => {
    updateSlider('prev');
    startTimer();
});

startTimer();