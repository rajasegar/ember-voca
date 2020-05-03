import { helper } from '@ember/component/helper';
import { first } from 'voca';

export default helper(function vocaFirst(params/*, hash */ ) {
  return first(params[0]);
});
