import { helper } from "@ember/component/helper";
import { camelCase } from "voca";

export default helper(function vocaCamelCase(params /*, hash*/) {
  return camelCase(params[0]);
});
