import { helper } from '@ember/component/helper';
import { lastIndexOf } from 'voca';

export default helper(function vocaLastIndexOf(params ) {
  return lastIndexOf(params[0], params[1]);
});
