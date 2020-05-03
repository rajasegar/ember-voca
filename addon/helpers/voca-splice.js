import { helper } from '@ember/component/helper';
import { splice } from 'voca';

export default helper(function vocaSplice(params/*, hash */ ) {
  return splice(params[0]);
});
