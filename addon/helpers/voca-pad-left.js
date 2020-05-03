import { helper } from '@ember/component/helper';
import { padLeft } from 'voca';

export default helper(function vocaPadLeft(params/*, hash */ ) {
  return padLeft(params[0]);
});
