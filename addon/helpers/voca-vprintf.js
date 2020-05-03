import { helper } from '@ember/component/helper';
import { vprintf } from 'voca';

export default helper(function vocaVprintf(params/*, hash */ ) {
  return vprintf(params[0]);
});
