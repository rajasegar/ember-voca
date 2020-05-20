import { helper } from '@ember/component/helper';
import { countSubstrings } from 'voca';

export default helper(function vocaCountSubstrings(params ) {
  return countSubstrings(params[0], params[1]);
});
