import { helper } from '@ember/component/helper';
import { isUpperCase } from 'voca';

export default helper(function vocaIsUpperCase(params/*, hash */ ) {
  return isUpperCase(params[0]);
});
