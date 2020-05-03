import { helper } from '@ember/component/helper';
import { trimLeft } from 'voca';

export default helper(function vocaTrimLeft(params/*, hash */ ) {
  return trimLeft(params[0]);
});
