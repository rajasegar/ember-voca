import { helper } from '@ember/component/helper';
import { trimRight } from 'voca';

export default helper(function vocaTrimRight(params/*, hash */ ) {
  return trimRight(params[0]);
});
