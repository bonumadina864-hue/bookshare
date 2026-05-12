<template>
  <div class="min-h-screen flex flex-col bg-white">
    <MainHeader v-if="!hideHeader" />
    <main class="flex-1 w-full min-w-0">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <MainFooter v-if="!hideFooter" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import { useLanguage } from "./composables/useLanguage";
import { bindGlobalPageTranslation } from "./composables/usePageTranslator";

const { currentLanguage } = useLanguage();
const route = useRoute();

const hideHeader = computed(() => {
  // Hide global header on login, forget, and contact-us pages (which have their own headers)
  return ['login', 'login2', 'forget', 'contact-us'].includes(route.name);
});

const hideFooter = computed(() => {
  // Hide global footer on login, login2, forget, and contact-us pages
  return ['login', 'login2', 'forget', 'contact-us'].includes(route.name);
});

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
