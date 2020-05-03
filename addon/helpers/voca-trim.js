import { helper } from '@ember/component/helper';
import { trim } from 'voca';

export default helper(function vocaTrim(params/*, hash */ ) {
  return trim(params[0]);
});
