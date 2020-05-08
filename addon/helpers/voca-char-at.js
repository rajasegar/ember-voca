import { helper } from '@ember/component/helper';
import { charAt } from 'voca';

export default helper(function vocaCharAt(params/*, hash */ ) {
  return charAt(params[0], params[1]);
});
