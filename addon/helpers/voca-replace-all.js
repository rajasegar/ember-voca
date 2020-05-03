import { helper } from '@ember/component/helper';
import { replaceAll } from 'voca';

export default helper(function vocaReplaceAll(params/*, hash */ ) {
  return replaceAll(params[0]);
});
