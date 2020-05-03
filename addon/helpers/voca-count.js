import { helper } from '@ember/component/helper';
import { count } from 'voca';

export default helper(function vocaCount(params/*, hash */ ) {
  return count(params[0]);
});
