import { helper } from '@ember/component/helper';
import { upperCase } from 'voca';

export default helper(function vocaUpperCase(params/*, hash */ ) {
  return upperCase(params[0]);
});
