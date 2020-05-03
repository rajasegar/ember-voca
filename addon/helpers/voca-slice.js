import { helper } from '@ember/component/helper';
import { slice } from 'voca';

export default helper(function vocaSlice(params/*, hash */ ) {
  return slice(params[0]);
});
