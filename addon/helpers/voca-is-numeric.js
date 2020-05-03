import { helper } from '@ember/component/helper';
import { isNumeric } from 'voca';

export default helper(function vocaIsNumeric(params/*, hash */ ) {
  return isNumeric(params[0]);
});
