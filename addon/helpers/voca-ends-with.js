import { helper } from '@ember/component/helper';
import { endsWith } from 'voca';

export default helper(function vocaEndsWith(params/*, hash */ ) {
  return endsWith(params[0], params[1]);
});
