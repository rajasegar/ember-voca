import { helper } from '@ember/component/helper';
import { last } from 'voca';

export default helper(function vocaLast(params/*, hash */ ) {
  return last(params[0]);
});
