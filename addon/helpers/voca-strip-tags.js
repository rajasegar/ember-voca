import { helper } from '@ember/component/helper';
import { stripTags } from 'voca';

export default helper(function vocaStripTags(params/*, hash */ ) {
  return stripTags(params[0]);
});
