import I18n from "i18n-js";
import * as Localization from "expo-localization";
import React, { useContext } from "react";
import AppContext from "../components/AppContext";

import en from "./en";
import fr from "./fr";

I18n.locale = Localization.locale.split("-")[0];

I18n.translations = {
  fr: fr,
  en: en,
};

I18n.fallbacks = true;
export default I18n;
