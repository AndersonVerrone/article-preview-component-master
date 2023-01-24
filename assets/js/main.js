const share = document.querySelector('.share');
const popUp = document.querySelector('.popUp')
share.addEventListener('click', () => {
    popUp.classList.toggle('disable');
    share.classList.toggle('active');
})