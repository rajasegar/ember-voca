import { helper } from '@ember/component/helper';
import { latinise } from 'voca';

export default helper(function vocaLatinise(params/*, hash */ ) {
  return latinise(params[0]);
});
