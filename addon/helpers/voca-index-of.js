import { helper } from '@ember/component/helper';
import { indexOf } from 'voca';

export default helper(function vocaIndexOf(params/*, hash */ ) {
  return indexOf(params[0]);
});
