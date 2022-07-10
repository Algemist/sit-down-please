const btn = document.querySelector('.rating__btn');
const cards = document.querySelectorAll('.rating__card_hidden')

if (btn) {
  btn.addEventListener('click', () => {
    cards.forEach((el) => {
      el.classList.remove('rating__card_hidden');
      btn.style.display = 'none';
    })
  });
};


