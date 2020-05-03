import { helper } from '@ember/component/helper';
import { words } from 'voca';

export default helper(function vocaWords(params/*, hash */ ) {
  return words(params[0]);
});
