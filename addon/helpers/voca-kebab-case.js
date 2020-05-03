import { helper } from '@ember/component/helper';
import { kebabCase } from 'voca';

export default helper(function vocaKebabCase(params/*, hash */ ) {
  return kebabCase(params[0]);
});
