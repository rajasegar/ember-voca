import { helper } from "@ember/component/helper";
import { padRight } from "voca";

export default helper(function vocaPadRight(params /*, hash */) {
  return padRight(params[0], params[1], params[2]);
});
