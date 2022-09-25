const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    // primaryNav.classList.toggle('opened');
    // primaryNav.hasAttribute('data-visible') ? console.log('true') : console.log("it doesn't")
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true)
    primaryNav.toggleAttribute('data-visible');
})