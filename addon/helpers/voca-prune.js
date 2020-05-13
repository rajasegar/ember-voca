import { helper } from "@ember/component/helper";
import { prune } from "voca";

export default helper(function vocaPrune(params /*, hash */) {
  return prune(params[0], params[1], params[2]);
});
