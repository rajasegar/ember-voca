import { helper } from '@ember/component/helper';
import { reverseGrapheme } from 'voca';

export default helper(function vocaReverseGrapheme(params/*, hash */ ) {
  return reverseGrapheme(params[0]);
});
