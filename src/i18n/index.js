import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        LOGIN: "LOGIN",
        Submit: "Submit",
        Email: "Email",
        Password: "Password",
        Register: "Register",
        "Or Sign In!": "Or Sign In!",
        "Confirm Password": "Confirm Password",
        "Or Sign Up!": "Or Sign Up!",
        Device: "Device",
        Charts: "Charts",
        "Log out": "Log out",
        Dashboard: "Dashboard",
        Name: "Name",
        Description: "Description",
        Status: "Status",
        "Select item to see Chart.": "Select item to see Chart."
      }
    },
    uk: {
      translations: {
        LOGIN: "Логін",
        Submit: "Підтвердити",
        Email: "Пошта",
        Password: "Пароль",
        Register: "Регістрація",
        "Or Sign In!": "Або залогінтесь!",
        "Confirm Password": "Підтвердити пароль",
        "Or Sign Up!": "Або зарегеструйтеся"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
