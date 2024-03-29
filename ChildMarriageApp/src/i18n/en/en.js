import mapKeys from "lodash/mapKeys";
import common from "./ENcommon";
import cm from "./ENchildmarriageLearn";
import edu from "./ENeducationLearn";
import laws from "./ENlawsLearn";
import srh from "./ENshrhLearn";
import sexuality from "./ENsexLearn";
import menstruations from "./ENmenstruationsLearn";
import commquest from "./ENcommonQuestionsLearn";
import stories from "./ENstories";
import quiz from "./ENquiz";

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
