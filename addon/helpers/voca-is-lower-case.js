import { helper } from '@ember/component/helper';
import { isLowerCase } from 'voca';

export default helper(function vocaIsLowerCase(params/*, hash */ ) {
  return isLowerCase(params[0]);
});
