import Swiper from 'swiper/bundle';

const heroSwiper = new Swiper(".hero__swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.hero__pag',
  },
  allowTouchMove: false,
  on: {
    init: function() {
      const paginationBullets = document.querySelectorAll(".hero__pag .swiper-pagination-bullet");
      paginationBullets.forEach((el) => {
        el.innerHTML = `
        <svg class="hero__circle" viewBox="-1 -1 22 22">
        <circle class="progress" r="10" cx="10" cy="10" fill="none" stroke="white" stroke-width="2"></circle>
        <circle class="progress-bg" r="10" cx="10" cy="10" fill="none" stroke="#ff862f" stroke-width="2"></circle>
        </svg>`;
      });
    },
  }
});



const offerSwiper = new Swiper(".offer__swiper", {
  spaceBetween: 32,
  slidesPerView: "auto",
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.offer__btn-next',
    prevEl: '.offer__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    724: {
      spaceBetween: 32,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    951: {
      spaceBetween: 32,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1025: {
      spaceBetween: 32,
      slidesPerView: "auto",
      slidesPerGroup: 3,
    }
  }
});

const articleSwiper = new Swiper(".article__swiper", {
  spaceBetween: 32,
  slidesPerView: 2,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.article__btn-next',
    prevEl: '.article__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 32,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    951: {
      spaceBetween: 32,
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1050: {
      spaceBetween: 32,
      slidesPerView: 2,
      slidesPerGroup: 1,
    }
  }
})

const productSwiper = new Swiper(".product__swiper", {
  spaceBetween: 32,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.product__btn-next',
    prevEl: '.product__btn-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 32,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    951: {
      spaceBetween: 32,
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1245: {
      spaceBetween: 32,
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 1,
    }
  }
})

const productPreviewSwiper = new Swiper(".add-swiper", {
  spaceBetween: 38,
  freeMode: true,
  slidesPerView: "auto",
  initialSlide: 1,
  mousewheel: true,
  breakpoints: {
    577: {
      direction: 'vertical',
      spaceBetween: 22,
      slidesPerView: 4,
      slidesPerGroup: 1,
      autoHeight: true,
    },
    1003: {
      spaceBetween: 38,
      slidesPerView: "auto",
    }
  },
});

const modalPreviewSwiper = new Swiper(".modal__swiper", {
  loop: true,
  centeredSlides: true,
  thumbs: {
    swiper: thumbsSwiper,
  },
});

const thumbsSwiper = new Swiper(".detail__swiper", {
  loop: true,
  spaceBetween: 78,
  slidesPerView: 4,
  freeMode: true,
  initialSlide: 1,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.detail__btn-next',
    prevEl: '.detail__btn-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
      slidesPerView: 1,
    },
    650: {
      spaceBetween: 78,
      slidesPerView: 2,
    },
    983: {
      spaceBetween: 78,
      slidesPerView: 3,
    },
    1316: {
      spaceBetween: 78,
      slidesPerView: 4,
    }
  }
});
