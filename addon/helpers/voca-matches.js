import { helper } from '@ember/component/helper';
import { matches } from 'voca';

export default helper(function vocaMatches(params/*, hash */ ) {
  return matches(params[0]);
});
