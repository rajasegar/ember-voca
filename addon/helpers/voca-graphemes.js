import { helper } from '@ember/component/helper';
import { graphemes } from 'voca';

export default helper(function vocaGraphemes(params/*, hash */ ) {
  return graphemes(params[0]);
});
