let headerNavigation = document.querySelector('.header__nav');
let headerNavigationToggle = document.querySelector('.header__nav-toggle');

headerNavigation.classList.remove('header__nav--nojs');

headerNavigationToggle.addEventListener('click', function() {
  if (headerNavigation.classList.contains('header__nav--closed')) {
    headerNavigation.classList.remove('header__nav--closed');
    headerNavigation.classList.add('header__nav--open');
  } else {
    headerNavigation.classList.add('header__nav--closed');
    headerNavigation.classList.remove('header__nav--open');
  }
});
