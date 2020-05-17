import { helper } from '@ember/component/helper';
import { substring } from 'voca';

export default helper(function vocaSubstring(params ) {
  return substring(params[0], params[1], params[2]);
});
