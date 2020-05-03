import { helper } from '@ember/component/helper';
import { startsWith } from 'voca';

export default helper(function vocaStartsWith(params/*, hash */ ) {
  return startsWith(params[0]);
});
