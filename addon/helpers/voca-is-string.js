import { helper } from '@ember/component/helper';
import { isString } from 'voca';

export default helper(function vocaIsString(params/*, hash */ ) {
  return isString(params[0]);
});
