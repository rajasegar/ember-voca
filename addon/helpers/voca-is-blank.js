import { helper } from '@ember/component/helper';
import { isBlank } from 'voca';

export default helper(function vocaIsBlank(params/*, hash */ ) {
  return isBlank(params[0]);
});
