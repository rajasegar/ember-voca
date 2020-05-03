import { helper } from '@ember/component/helper';
import { substring } from 'voca';

export default helper(function vocaSubstring(params/*, hash */ ) {
  return substring(params[0]);
});
