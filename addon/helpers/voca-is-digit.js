import { helper } from '@ember/component/helper';
import { isDigit } from 'voca';

export default helper(function vocaIsDigit(params/*, hash */ ) {
  return isDigit(params[0]);
});
