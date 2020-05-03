import { helper } from '@ember/component/helper';
import { isAlphaDigit } from 'voca';

export default helper(function vocaIsAlphaDigit(params/*, hash */ ) {
  return isAlphaDigit(params[0]);
});
