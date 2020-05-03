import { helper } from '@ember/component/helper';
import { titleCase } from 'voca';

export default helper(function vocaTitleCase(params/*, hash */ ) {
  return titleCase(params[0]);
});
