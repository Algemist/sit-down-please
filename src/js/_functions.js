// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from "graph-modal";
export const modal = new GraphModal();

// Реализация табов
import GraphTabs from "graph-tabs";
const tabsSelector = document.querySelector(`.tabs`);
if (tabsSelector) {
  const tabs = new GraphTabs("tabs");
}

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов

// const button = document.querySelector('#tooltip-btn');
// const tooltip = document.querySelector('#tooltip-txt');
// console.log(button, tooltip);

// Подключение свайпера

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from "./functions/validate-forms";
import JustValidate from "just-validate";

const mainForm = document.querySelector('.contacts__form');
const modalForm = document.querySelector('.modal__form');

if (mainForm) {
  const rules1 = [
    {
      ruleSelector: ".input_name",
      rules: [
        {
          rule: "minLength",
          value: 2,
          errorMessage: "Недопустимый формат",
        },
        {
          rule: "required",
          value: "true",
          errorMessage: 'Заполните поле "Имя"',
        },
      ],
    },
    {
      ruleSelector: ".input_email",
      rules: [
        {
          rule: "required",
          value: "true",
          errorMessage: 'Заполните поле "Почта"',
        },
        {
          rule: "customRegexp",
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMessage: "Недопустимый формат",
        },
      ],
    },
    {
      ruleSelector: ".custom-checkbox__input",
      rules: [
        {
          rule: "required",
          value: "true",
          errorMessage: "Примите пользовательское соглашение",
        },
      ],
    },
    {
      ruleSelector: ".input_phone",
      tel: true,
      telError: 'Недопустимый формат',
      rules: [
        {
          rule: "required",
          value: "true",
          errorMessage: 'Заполните поле "Телефон"',
        },
      ],
    },
  ]

  validateForms('.contacts__form', rules1);
}

if (modalForm) {
  const rules2 = [
    {
      ruleSelector: ".modal__input_name",
      rules: [
        {
          rule: "minLength",
          value: 2,
          errorMessage: "Недопустимый формат",
        },
        {
          rule: "required",
          value: "true",
          errorMessage: 'Заполните поле "Имя"',
        },
      ],
    },
    {
      ruleSelector: ".modal__input_phone",
      tel: true,
      telError: 'Недопустимый формат',
      rules: [
        {
          rule: "required",
          value: "true",
          errorMessage: 'Заполните поле "Телефон"',
        },
      ],
    },
    {
      ruleSelector: ".custom-checkbox__input",
      rules: [
        {
          rule: "required",
          value: "true",
          errorMessage: "Примите пользовательское соглашение",
        },
      ],
    },
  ];

  const openCongratsModal = () => {
    console.log('ПРОИЗОШЛА ОТПРАВКА...')
    modal.close();
    modal.open('congrats-modal');
  }

  validateForms('.modal__form', rules2, openCongratsModal);
}


