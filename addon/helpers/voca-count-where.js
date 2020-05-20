import { helper } from '@ember/component/helper';
import { countWhere } from 'voca';

export default helper(function vocaCountWhere(params) {
  return countWhere(params[0], params[1]);
});
