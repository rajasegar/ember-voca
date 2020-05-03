import { helper } from '@ember/component/helper';
import { chars } from 'voca';

export default helper(function vocaChars(params/*, hash */ ) {
  return chars(params[0]);
});
