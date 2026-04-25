<template>
  <div ref="barRef" class="relative bg-[#e6f4f1] py-1 px-10">
    <div class="flex items-center justify-end text-[13px] text-[#003366]">
      <a href="#" class="underline underline-offset-2 hover:opacity-80">{{ t("donate") }}</a>

      <span class="border-l border-gray-400 h-4 mx-4"></span>

      <button
        type="button"
        class="inline-flex items-center gap-1 hover:opacity-80"
        @click="toggleDropdown"
      >
        <span>{{ currentLabel }}</span>
        <svg class="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 011.08 1.04l-4.25 4.512a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition name="dropdown-fade">
      <div
        v-if="isDropdownOpen"
        class="absolute right-10 top-full z-[60] mt-1 min-w-[150px] bg-white shadow-md"
      >
        <button
          v-for="language in languageOptions"
          :key="language.code"
          type="button"
          class="block w-full px-3 py-1.5 text-left text-[13px]"
          :class="
            currentLanguage === language.code
              ? 'bg-[#003366] text-white'
              : 'text-[#003366] hover:bg-gray-100'
          "
          @click="selectLanguage(language.code)"
        >
          {{ language.label }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { languageOptions, useLanguage } from "../composables/useLanguage";

const barRef = ref(null);
const isDropdownOpen = ref(false);

const { currentLanguage, setLanguage, t } = useLanguage();

const currentLabel = computed(() => {
  return languageOptions.find((language) => language.code === currentLanguage.value)?.label ?? "English";
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectLanguage = (code) => {
  setLanguage(code);
  isDropdownOpen.value = false;
};

const onOutsideClick = (event) => {
  if (barRef.value && !barRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", onOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onOutsideClick);
});
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
