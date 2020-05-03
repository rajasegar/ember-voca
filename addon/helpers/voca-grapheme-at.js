import { helper } from '@ember/component/helper';
import { graphemeAt } from 'voca';

export default helper(function vocaGraphemeAt(params/*, hash */ ) {
  return graphemeAt(params[0]);
});
