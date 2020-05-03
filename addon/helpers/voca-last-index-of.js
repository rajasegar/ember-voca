import { helper } from '@ember/component/helper';
import { lastIndexOf } from 'voca';

export default helper(function vocaLastIndexOf(params/*, hash */ ) {
  return lastIndexOf(params[0]);
});
