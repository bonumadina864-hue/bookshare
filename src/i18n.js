import i18next from "i18next";
import HttpBackend from "i18next-http-backend";

const storedLanguage =
  typeof window !== "undefined"
    ? window.localStorage.getItem("bookshare-language") || "en"
    : "en";

i18next
  .use(HttpBackend)
  .init({
    lng: storedLanguage,
    fallbackLng: "en",
    supportedLngs: ["en", "uz", "ru"],
    ns: ["translation"],
    defaultNS: "translation",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

i18next.on("initialized", () => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = i18next.language || storedLanguage;
  }
});

export default i18next;
