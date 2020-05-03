import { helper } from '@ember/component/helper';
import { capitalize } from 'voca';

export default helper(function vocaCapitalize(params/*, hash */ ) {
  return capitalize(params[0]);
});
