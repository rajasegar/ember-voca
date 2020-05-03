import { helper } from '@ember/component/helper';
import { isEmpty } from 'voca';

export default helper(function vocaIsEmpty(params/*, hash */ ) {
  return isEmpty(params[0]);
});
