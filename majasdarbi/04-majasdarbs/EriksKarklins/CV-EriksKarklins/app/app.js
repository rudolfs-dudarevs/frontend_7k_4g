/* Saturs */
const navSlide = () => {
    const smallscr = document.querySelector('.smallscr');
    const nav = document.querySelector('.menulink');
    
    smallscr.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();
/* Saturs-end */