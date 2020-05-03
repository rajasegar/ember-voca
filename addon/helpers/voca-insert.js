import { helper } from '@ember/component/helper';
import { insert } from 'voca';

export default helper(function vocaInsert(params/*, hash */ ) {
  return insert(params[0]);
});
