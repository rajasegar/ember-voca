import { helper } from '@ember/component/helper';
import { swapCase } from 'voca';

export default helper(function vocaSwapCase(params/*, hash */ ) {
  return swapCase(params[0]);
});
