let prevScrollpos = window.pageYOffset;
let btn = document.querySelector('.header__burger-menu'),
    nav = document.querySelector('.nav'),
    header = document.querySelector('.header');


window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.js').style.top = "0";
    } else {
        document.querySelector('.js').style.top = "-170px";
    }
    prevScrollpos = currentScrollPos;
}

btn.addEventListener('click', function () {
    nav.classList.toggle('show');
    header.classList.toggle('padding-zero');
    header.classList.toggle('js');
})