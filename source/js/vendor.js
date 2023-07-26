// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

export const initTrainersSlider = function initTrainersSlider() {
  const trainersSlider = new Swiper('.trainers__content', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
};

// ---------------------------------
export const initFeedbackSlider = function initFeedbackSlider() {
  const feedbackSlider = new Swiper('.feedback__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
    slidesPerView: 1,
  });
};
