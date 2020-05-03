import { helper } from '@ember/component/helper';
import { reverse } from 'voca';

export default helper(function vocaReverse(params/*, hash */ ) {
  return reverse(params[0]);
});
