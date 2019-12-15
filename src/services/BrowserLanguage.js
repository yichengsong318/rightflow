import { LOCAL_STORAGE_LANG_KEY, LANGUAGES } from "constants/constants";

const BrowserLanguage = {
  getBrowserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  },

  getLanguageSet: function() {
    return localStorage ? localStorage.getItem(LOCAL_STORAGE_LANG_KEY) : null;
  },

  setLanguage: function(lang) {
    if (localStorage) {
      localStorage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
      return true;
    }
    return false;
  },

  getDefaultLanguage: function() {
    const langSet = this.getLanguageSet();
    if (langSet) {
      return langSet;
    } else {
      const browserLang = this.getBrowserLanguage();
      if (browserLang) {
        let lang = "";
        for (let lang of LANGUAGES) {
          if (lang && browserLang.includes(lang.key)) {
            lang = lang.key;
            break;
          }
        }
        return lang ? lang : "en";
      }
    }
  }
};
export default BrowserLanguage;
