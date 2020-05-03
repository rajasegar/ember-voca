import { helper } from '@ember/component/helper';
import { split } from 'voca';

export default helper(function vocaSplit(params/*, hash */ ) {
  return split(params[0]);
});
