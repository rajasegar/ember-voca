import { helper } from '@ember/component/helper';
import { repeat } from 'voca';

export default helper(function vocaRepeat(params/*, hash */ ) {
  return repeat(params[0]);
});
