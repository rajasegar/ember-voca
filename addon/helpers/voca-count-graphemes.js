import { helper } from '@ember/component/helper';
import { countGraphemes } from 'voca';

export default helper(function vocaCountGraphemes(params/*, hash */ ) {
  return countGraphemes(params[0]);
});
