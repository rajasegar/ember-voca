import { helper } from '@ember/component/helper';
import { codePointAt } from 'voca';

export default helper(function vocaCodePointAt(params/*, hash */ ) {
  return codePointAt(params[0]);
});
