import { helper } from '@ember/component/helper';
import { countSubstrings } from 'voca';

export default helper(function vocaCountSubstrings(params/*, hash */ ) {
  return countSubstrings(params[0]);
});
