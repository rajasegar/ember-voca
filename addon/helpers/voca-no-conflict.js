import { helper } from '@ember/component/helper';
import { noConflict } from 'voca';

export default helper(function vocaNoConflict(params/*, hash */ ) {
  return noConflict(params[0]);
});
