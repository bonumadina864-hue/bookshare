import { watch } from "vue";
import i18next from "../i18n";

const textNodeOriginalMap = new WeakMap();

const exactTranslate = (value, language) => {
  if (!value) return value;
  if (language === "en") return value;
  return i18next.t(value, { lng: language, defaultValue: value });
};

const translateTextNode = (node, language) => {
  if (!textNodeOriginalMap.has(node)) {
    textNodeOriginalMap.set(node, node.nodeValue);
  }

  const original = textNodeOriginalMap.get(node) ?? "";
  const trimmed = original.trim();
  if (!trimmed) return;

  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  const translated = exactTranslate(trimmed, language);
  node.nodeValue = `${leading}${translated}${trailing}`;
};

const translateAttributes = (element, language) => {
  const attributeNames = ["placeholder", "title", "aria-label"];

  attributeNames.forEach((name) => {
    const current = element.getAttribute(name);
    if (!current) return;

    const dataKey = `data-i18n-original-${name}`;
    if (!element.hasAttribute(dataKey)) {
      element.setAttribute(dataKey, current);
    }

    const original = element.getAttribute(dataKey) || current;
    element.setAttribute(name, exactTranslate(original, language));
  });

  if (element instanceof HTMLInputElement && (element.type === "button" || element.type === "submit")) {
    if (!element.dataset.i18nOriginalValue) {
      element.dataset.i18nOriginalValue = element.value;
    }
    element.value = exactTranslate(element.dataset.i18nOriginalValue, language);
  }
};

export const translatePage = (language) => {
  if (typeof document === "undefined") return;

  const root = document.body;
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let current = walker.nextNode();
  while (current) {
    const parentTag = current.parentElement?.tagName;
    if (parentTag !== "SCRIPT" && parentTag !== "STYLE" && parentTag !== "NOSCRIPT") {
      nodes.push(current);
    }
    current = walker.nextNode();
  }

  nodes.forEach((node) => translateTextNode(node, language));
  root.querySelectorAll("*").forEach((element) => translateAttributes(element, language));
};

export const bindGlobalPageTranslation = (currentLanguage) => {
  if (typeof document === "undefined") {
    return () => {};
  }

  let frameId = null;
  const queueTranslate = () => {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
    }
    frameId = window.requestAnimationFrame(() => {
      translatePage(currentLanguage.value);
      frameId = null;
    });
  };

  const observer = new MutationObserver(() => {
    queueTranslate();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  const stopWatch = watch(
    currentLanguage,
    (lang) => {
      document.documentElement.lang = lang;
      queueTranslate();
    },
    { immediate: true }
  );

  return () => {
    stopWatch();
    observer.disconnect();
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
    }
  };
};
