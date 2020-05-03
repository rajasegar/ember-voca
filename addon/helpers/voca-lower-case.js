import { helper } from '@ember/component/helper';
import { lowerCase } from 'voca';

export default helper(function vocaLowerCase(params/*, hash */ ) {
  return lowerCase(params[0]);
});
