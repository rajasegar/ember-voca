import { helper } from '@ember/component/helper';
import { search } from 'voca';

export default helper(function vocaSearch(params/*, hash */ ) {
  return search(params[0]);
});
