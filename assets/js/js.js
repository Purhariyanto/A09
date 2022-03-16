const links = document.getElementById('links');
const bars = document.querySelector('.bars');
const navLinks = document.querySelectorAll('.nav-link');

const navToggleFunc = function () {
  links.className == "links" || links.className == "links1" ? links.className = "active":links.className = "links";
}

const navToggleFunc1 = function () {
  links.className == "links" ? links.className = "links1":links.className = "links1";
}

bars.addEventListener('click', function () {
  navToggleFunc();
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc1);
}
