import { helper } from '@ember/component/helper';
import { graphemeAt } from 'voca';

export default helper(function vocaGraphemeAt(params) {
  return graphemeAt(params[0], params[1]);
});
