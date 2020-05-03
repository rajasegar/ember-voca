import { helper } from '@ember/component/helper';
import { sprintf } from 'voca';

export default helper(function vocaSprintf(params/*, hash */ ) {
  return sprintf(params[0]);
});
