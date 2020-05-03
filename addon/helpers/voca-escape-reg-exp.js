import { helper } from '@ember/component/helper';
import { escapeRegExp } from 'voca';

export default helper(function vocaEscapeRegExp(params/*, hash */ ) {
  return escapeRegExp(params[0]);
});
