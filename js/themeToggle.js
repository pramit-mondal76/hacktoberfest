const switchBtn = document.querySelector('.switch_1');

switchBtn.addEventListener('click', (event) => {
    if (event.target.checked) {
        document.body.className = 'dark-mode';
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.removeItem('mode');
        document.body.classList = [];
    }
});

if (localStorage.getItem('mode') === 'dark') {
    switchBtn.checked = true;
    document.body.className = 'dark-mode';
}
