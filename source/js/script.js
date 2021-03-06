// modules
import pageLoad from './modules/page-load';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import rules from './modules/rules.js';
import FullPageScroll from './modules/full-page-scroll.js';
import LettersAnimation from "./modules/letters-animation.js";

// init modules
pageLoad();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animateMainTitle = new LettersAnimation(`.intro__title`, 1000, `intro__word`, `active`, `transform`);
const animateDate = new LettersAnimation(`.intro__date`, 1000, `intro__word`, `active`, `transform`);
const animateSliderTitle = new LettersAnimation(`.slider__item-title`, 1000, `slider__item-word`, `active`, `transform`);
setTimeout(() => {
  animateMainTitle.runAnimation();
  animateDate.runAnimation();
  animateSliderTitle.runAnimation();
}, 500);
