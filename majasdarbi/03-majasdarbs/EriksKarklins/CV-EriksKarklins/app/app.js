/* Saturs */
const navSlide = () => {
    const smallscr = document.querySelector('.smallscr');
    const nav = document.querySelector('.Saturalink');
    
    smallscr.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();
/* Saturs-end */