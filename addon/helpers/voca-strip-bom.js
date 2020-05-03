import { helper } from '@ember/component/helper';
import { stripBom } from 'voca';

export default helper(function vocaStripBom(params/*, hash */ ) {
  return stripBom(params[0]);
});
