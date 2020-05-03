import { helper } from '@ember/component/helper';
import { isAlpha } from 'voca';

export default helper(function vocaIsAlpha(params/*, hash */ ) {
  return isAlpha(params[0]);
});
