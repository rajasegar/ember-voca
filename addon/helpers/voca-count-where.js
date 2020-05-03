import { helper } from '@ember/component/helper';
import { countWhere } from 'voca';

export default helper(function vocaCountWhere(params/*, hash */ ) {
  return countWhere(params[0]);
});
