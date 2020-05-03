import { helper } from '@ember/component/helper';
import { unescapeHtml } from 'voca';

export default helper(function vocaUnescapeHtml(params/*, hash */ ) {
  return unescapeHtml(params[0]);
});
