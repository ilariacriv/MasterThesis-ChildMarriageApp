import mapKeys from "lodash/mapKeys";
import common from "./FRcommon";
import cm from "./FRchildmarriageLearn";
import edu from "./FReducationLearn";
import laws from "./FRlawsLearn";
import srh from "./FRshrhLearn";
import sexuality from "./FRsexLearn";
import menstruations from "./FRmenstruationsLearn";
import commquest from "./FRcommonQuestionsLearn";
import stories from "./FRstories";
import quiz from "./FRquiz";

export default {
  // mapKeys is only used to add a namespace on keys
  ...mapKeys(common, (_, key) => `common/${key}`),
  ...mapKeys(cm, (_, key) => `cm/${key}`),
  ...mapKeys(edu, (_, key) => `edu/${key}`),
  ...mapKeys(laws, (_, key) => `laws/${key}`),
  ...mapKeys(srh, (_, key) => `srh/${key}`),
  ...mapKeys(sexuality, (_, key) => `sexuality/${key}`),
  ...mapKeys(menstruations, (_, key) => `menstruations/${key}`),
  ...mapKeys(commquest, (_, key) => `commquest/${key}`),
  ...mapKeys(stories, (_, key) => `stories/${key}`),
  ...mapKeys(quiz, (_, key) => `quiz/${key}`),
};
