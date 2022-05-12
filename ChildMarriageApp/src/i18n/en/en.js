import mapKeys from "lodash/mapKeys";
import common from "./ENcommon";
import cm from "./ENchildmarriageLearn";

export default {
  // mapKeys is only used to add a namespace on keys
  ...mapKeys(common, (_, key) => `common/${key}`),
  ...mapKeys(cm, (_, key) => `cm/${key}`),
};
