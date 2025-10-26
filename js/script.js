const popupBtn = document.getElementById('popupBtn');
const closeBtn = document.getElementById('close-btn');
const popup = document.getElementById('popup');

popupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
});