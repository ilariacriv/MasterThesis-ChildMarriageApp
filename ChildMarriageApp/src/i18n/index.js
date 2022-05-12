import I18n from "i18n-js";
import * as Localization from "expo-localization";

import en from "./en/en";
import fr from "./fr/fr";

I18n.locale = Localization.locale.split("-")[0];

I18n.translations = {
  fr: fr,
  en: en,
};

I18n.fallbacks = true;
export default I18n;
