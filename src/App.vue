<template>
  <router-view />
</template>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import { useLanguage } from "./composables/useLanguage";
import { bindGlobalPageTranslation } from "./composables/usePageTranslator";

const { currentLanguage } = useLanguage();
let cleanupTranslator = null;

onMounted(() => {
  cleanupTranslator = bindGlobalPageTranslation(currentLanguage);
});

onBeforeUnmount(() => {
  if (cleanupTranslator) {
    cleanupTranslator();
  }
});
</script>
