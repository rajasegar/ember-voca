import { helper } from '@ember/component/helper';
import { replace } from 'voca';

export default helper(function vocaReplace(params/*, hash */ ) {
  return replace(params[0]);
});
