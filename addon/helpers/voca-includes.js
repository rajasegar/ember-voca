import { helper } from "@ember/component/helper";
import { includes } from "voca";

export default helper(function vocaIncludes(params /*, hash */) {
  return includes(params[0], params[1], params[2]);
});
