import { helper } from '@ember/component/helper';
import { escapeHtml } from 'voca';

export default helper(function vocaEscapeHtml(params/*, hash */ ) {
  return escapeHtml(params[0]);
});
