const dropdownBtns = document.querySelectorAll(".dropdown-btn");

if (dropdownBtns) {
  document.querySelectorAll(".dropdown-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".dropdown__container");

      document.querySelectorAll(".dropdown-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active-btn");
        }
      });

      document.querySelectorAll(".dropdown__container").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-dropdown");
        }
      })
      dropdown.classList.toggle("active-dropdown");
      btn.classList.toggle("active-btn")
    })
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".dropdown__list")) {
      document.querySelectorAll(".dropdown__container").forEach(el => {
          el.classList.remove("active-dropdown");
      })
       document.querySelectorAll(".dropdown-btn").forEach(el => {
          el.classList.remove("active-btn");
      });
    }
  })

  const dropdown = document.querySelectorAll('.dropdown__container');

  dropdown.forEach((el) => {
    if (el.children.length > 10) {
      const showMoreBtn = document.createElement('button');

      showMoreBtn.classList.add('btn-reset');
      showMoreBtn.classList.add('dropdown__btn');
      showMoreBtn.textContent = '+ ещё ' + (el.children.length - 9);
      for (let i = 9; i < el.children.length; ++i) {
        el.children[i].classList.add('dropdown__label_hidden');
      }
      showMoreBtn.addEventListener('click', () => {
        showMoreBtn.textContent === 'Свернуть' ? showMoreBtn.textContent = '+ еще' + (el.children.length - 10) : showMoreBtn.textContent = 'Свернуть';
        for (let i = 9; i < el.children.length - 1; ++i) {
          el.children[i].classList.toggle('dropdown__label_hidden');
        }
      });
      el.append(showMoreBtn);
    }
  });
};


if (window.innerWidth <= 576) {
  const mobileDiscountInput = document.querySelectorAll('.catalog__checkbox_discount');
  mobileDiscountInput.forEach(el => {
    if (el.parentNode.innerHTML.includes('Более')) {
      el.parentNode.innerHTML = el.parentNode.innerHTML.replace(/Более/gi,'>').trim();
    } else if (el.parentNode.innerHTML.includes('Менее')) {
      el.parentNode.innerHTML = el.parentNode.innerHTML.replace(/Менее/gi,'<').trim();
    }
  });
}
