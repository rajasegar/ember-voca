import { helper } from '@ember/component/helper';
import { decapitalize } from 'voca';

export default helper(function vocaDecapitalize(params/*, hash */ ) {
  return decapitalize(params[0]);
});
