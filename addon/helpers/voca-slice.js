import { helper } from '@ember/component/helper';
import { slice } from 'voca';

export default helper(function vocaSlice(params, { start, end } ) {
  return slice(params[0], start, end);
});
