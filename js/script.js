const button = document.querySelectorAll('.section-title');
const list = document.querySelectorAll('section ul');

function handleClick() {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
    list[i].classList.toggle('active');

    })
  }
}

handleClick();

// ScrollReveal

ScrollReveal().reveal('header', {delay: 100});
ScrollReveal().reveal('.section-title', {delay: 200});
ScrollReveal().reveal('footer', {delay: 200});