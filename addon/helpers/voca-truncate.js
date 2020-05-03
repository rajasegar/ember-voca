import { helper } from '@ember/component/helper';
import { truncate } from 'voca';

export default helper(function vocaTruncate(params/*, hash */ ) {
  return truncate(params[0]);
});
