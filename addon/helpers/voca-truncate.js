import { helper } from '@ember/component/helper';
import { truncate } from 'voca';

export default helper(function vocaTruncate(params) {
  return truncate(params[0], params[1], params[2]);
});
