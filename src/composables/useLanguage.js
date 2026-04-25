import { ref } from "vue";
import i18next from "../i18n";

const currentLanguage = ref(i18next.language || "en");
let listenerBound = false;
const defaultTextMap = {
  donate: "Donate",
  navWhatIsBookshare: "What is Bookshare?",
  navWhoIsBookshareFor: "Who is Bookshare for?",
  navExploreLibrary: "Explore our library",
  navLogin: "Log in",
  navSignup: "Sign up",
  heroTitle: "Get ready for summer reading",
  heroSubtitle: "Lock in this years gains for your students with an Individual Membership.",
  heroLearnMore: "Learn more >",
  heroSignup: "Sign up",
};

export const languageOptions = [
  { code: "en", label: "English" },
  { code: "uz", label: "O'zbek" },
  { code: "ru", label: "Русский" },
];

export const useLanguage = () => {
  const setLanguage = async (code) => {
    await i18next.changeLanguage(code);
    currentLanguage.value = code;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("bookshare-language", code);
      document.documentElement.lang = code;
    }
  };

  const t = (key) => {
    if (i18next.exists(key)) {
      return i18next.t(key);
    }
    return defaultTextMap[key] ?? key;
  };

  if (!listenerBound) {
    i18next.on("languageChanged", (lng) => {
      currentLanguage.value = lng;
      if (typeof document !== "undefined") {
        document.documentElement.lang = lng;
      }
    });
    listenerBound = true;
  }

  return {
    currentLanguage,
    languageOptions,
    setLanguage,
    t,
  };
};
