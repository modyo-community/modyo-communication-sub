/* eslint-disable no-useless-catch */

import liquidParser from '../liquid/liquidParser';
import dataEs from '../mocks/data-es.json';
import dataEn from '../mocks/data-en.json';

const LANG = liquidParser.parse('{{site.language}}');
const BASE_DATA = LANG === 'es' ? dataEs : dataEn;

export default {
  DO_DATA_INITIALIZATION() {
    return BASE_DATA;
  },
};
