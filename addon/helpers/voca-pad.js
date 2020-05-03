import { helper } from '@ember/component/helper';
import { pad } from 'voca';

export default helper(function vocaPad(params/*, hash */ ) {
  return pad(params[0]);
});
