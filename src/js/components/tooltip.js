import { createPopper, right } from '@popperjs/core';
const tooltip = document.querySelector('.tooltip__btn');

if (tooltip) {
  const popperInstance = createPopper(tooltip, document.querySelector('.tooltip__txt'), {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 13],
        },
      },
    ],
  });

  function show() {
    document.querySelector('.tooltip__txt').setAttribute('data-show', '');
    popperInstance.update();
  }

  function hide() {
    document.querySelector('.tooltip__txt').removeAttribute('data-show');
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach((event) => {
    document.querySelector('.tooltip__btn').addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    document.querySelector('.tooltip__btn').addEventListener(event, hide);
  });
}


