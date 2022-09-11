const elSiteHeaderToggler = document.querySelector('.js-site-hedaer-toggler');
const elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');
if (elSiteHeaderToggler) {
    elSiteHeaderToggler.addEventListener('click', function () {
        elSiteHeaderToggler.classList.toggle('site-header__sitenav--open');
    })
}