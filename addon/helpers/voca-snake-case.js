import { helper } from '@ember/component/helper';
import { snakeCase } from 'voca';

export default helper(function vocaSnakeCase(params/*, hash */ ) {
  return snakeCase(params[0]);
});
