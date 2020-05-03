import { helper } from '@ember/component/helper';
import { codePoints } from 'voca';

export default helper(function vocaCodePoints(params/*, hash */ ) {
  return codePoints(params[0]);
});
