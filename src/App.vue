<template>
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.32s ease, transform 0.32s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
