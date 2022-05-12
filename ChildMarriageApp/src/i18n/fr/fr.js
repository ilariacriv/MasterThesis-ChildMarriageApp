import mapKeys from "lodash/mapKeys";
import common from "./FRcommon";
import cm from "./FRchildmarriageLearn";

export default {
  // mapKeys is only used to add a namespace on keys
  ...mapKeys(common, (_, key) => `common/${key}`),
  ...mapKeys(cm, (_, key) => `cm/${key}`),
};
