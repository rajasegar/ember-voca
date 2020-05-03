import { helper } from '@ember/component/helper';
import { slugify } from 'voca';

export default helper(function vocaSlugify(params/*, hash */ ) {
  return slugify(params[0]);
});
