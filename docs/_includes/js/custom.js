function updateScreenWidth() {
  const width = window.innerWidth;
  document.documentElement.style.setProperty('--screen-width', `${width}px`);
}

updateScreenWidth();
window.addEventListener('resize', updateScreenWidth);

document.addEventListener('DOMContentLoaded', function() {
  const siteProfile = document.getElementById('site-profile');
  const siteContact = document.getElementById('site-contact');
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', function(e) {
  if (menuButton.classList.contains('nav-open')) {
    siteProfile.classList.add('nav-open');
    siteContact.classList.add('nav-open');
  } else {
    siteProfile.classList.remove('nav-open');
    siteContact.classList.remove('nav-open');
  }});

  document.body.classList.add('fade-in');
});
