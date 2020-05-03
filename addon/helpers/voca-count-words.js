import { helper } from '@ember/component/helper';
import { countWords } from 'voca';

export default helper(function vocaCountWords(params/*, hash */ ) {
  return countWords(params[0]);
});
