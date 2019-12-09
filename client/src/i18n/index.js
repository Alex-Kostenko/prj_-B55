import Ukr from './Ukr.js';
import Eng from './Eng.js';
const locale = localStorage.getItem('lang');

const I18n = {
  'Eng': Eng,
  'Ukr': Ukr
};

export default I18n[locale];
