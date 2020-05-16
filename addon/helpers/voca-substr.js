import { helper } from '@ember/component/helper';
import { substr } from 'voca';

export default helper(function vocaSubstr(params ) {
  return substr(params[0], params[1], params[2]);
});
