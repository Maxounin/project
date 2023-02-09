let btn = document.querySelector('.header__burger-menu'),
    nav = document.querySelector('.nav'),
    header = document.querySelector('.header'),
    contact = document.querySelector('.nav__contact'),
    menuBtn = document.querySelector('.header__burger-menu');


window.onscroll = function() {
    if (window.scrollY > 150 && !header.classList.contains('fix')) {
        header.classList.add('fix');

    } else {
        if (window.scrollY <= 150 && header.classList.contains('fix')) {
            header.classList.remove('fix');
        }
    }

}

btn.addEventListener('click', function () {
    nav.classList.toggle('show');
    contact.classList.toggle('show-contact');
    document.body.classList.toggle('fix');
    menuBtn.classList.toggle('rotate');
})