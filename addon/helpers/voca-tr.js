import { helper } from '@ember/component/helper';
import { tr } from 'voca';

export default helper(function vocaTr(params/*, hash */ ) {
  return tr(params[0]);
});
