import { helper } from '@ember/component/helper';
import { substr } from 'voca';

export default helper(function vocaSubstr(params/*, hash */ ) {
  return substr(params[0]);
});
