import { helper } from '@ember/component/helper';
import { wordWrap } from 'voca';

export default helper(function vocaWordWrap(params/*, hash */ ) {
  return wordWrap(params[0]);
});
