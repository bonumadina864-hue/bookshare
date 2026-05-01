<template>
  <header>
    <TopUtilityBar />
    <nav class="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-sm lg:px-10">
      <div class="flex items-center space-x-8">
        <div class="flex items-center text-2xl font-bold text-blue-900">
          <router-link to="/"><img src="https://www.bookshare.org/images/logo_.png" alt="Bookshare" /></router-link>
        </div>

        <div ref="menuWrapRef" class="relative hidden items-center space-x-8 text-base font-semibold text-gray-800 lg:flex">
          <div class="relative">
            <button
              type="button"
              class="rounded-2xl transition"
              :class="openMenu === 'what' ? 'border-2 border-blue-500 px-5 py-2 text-black' : 'px-0 py-0 hover:text-blue-800'"
              @click="toggleMenu('what')"
            >
              {{ t("navWhatIsBookshare") }} <i class="fas fa-chevron-down text-[10px]"></i>
            </button>
            <div v-if="openMenu === 'what'" class="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              <router-link to="/bookshare-library" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100" @click="openMenu = null">Bookshare Library</router-link>
              <router-link to="/bookshare-reader" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100" @click="openMenu = null">Bookshare Reader</router-link>
            </div>
          </div>

          <div class="relative">
            <button
              type="button"
              class="rounded-2xl transition"
              :class="openMenu === 'who' ? 'border-2 border-blue-500 px-5 py-2 text-black' : 'px-0 py-0 hover:text-blue-800'"
              @click="toggleMenu('who')"
            >
              {{ t("navWhoIsBookshareFor") }} <i class="fas fa-chevron-down text-[10px]"></i>
            </button>
            <div v-if="openMenu === 'who'" class="absolute left-0 top-full z-50 mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Parents and students</a>
              <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Educators and schools</a>
              <router-link to="/higher-education-students" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100" @click="openMenu = null">Higher education students</router-link>
              <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Adults</a>
              <router-link to="/global" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100" @click="openMenu = null">Global</router-link>
            </div>
          </div>

          <a href="#" class="hover:text-blue-800">{{ t("navExploreLibrary") }}</a>
        </div>
      </div>

      <div class="hidden items-center space-x-6 lg:flex">
        <router-link to="/login" class="flex items-center font-bold text-gray-800 hover:text-blue-800">
          <i class="far fa-user-circle mr-2 text-2xl"></i> {{ t("navLogin") }}
        </router-link>
        <router-link to="/signup" class="rounded-md bg-[#001529] px-6 py-2 font-bold text-white transition hover:bg-black">{{ t("navSignup") }}</router-link>
      </div>

      <button class="text-2xl text-[#003082] lg:hidden" type="button" @click="mobileMenuOpen = !mobileMenuOpen">
        <i class="fas fa-bars"></i>
      </button>
    </nav>

    <div v-if="mobileMenuOpen" class="space-y-3 border-t border-gray-200 bg-white px-6 py-4 font-semibold text-[#003082] lg:hidden">
      <a href="#" class="block">What is Bookshare?</a>
      <a href="#" class="block">Who is Bookshare for?</a>
      <a href="#" class="block">Explore our library</a>
      <router-link to="/higher-education-students" class="block" @click="mobileMenuOpen = false">Higher education students</router-link>
      <router-link to="/global" class="block" @click="mobileMenuOpen = false">Global</router-link>
      <router-link to="/login" class="block" @click="mobileMenuOpen = false">{{ t("navLogin") }}</router-link>
      <router-link to="/signup" class="inline-block rounded-md bg-[#001529] px-4 py-2 text-white" @click="mobileMenuOpen = false">{{ t("navSignup") }}</router-link>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import TopUtilityBar from "./TopUtilityBar.vue";
import { useLanguage } from "../composables/useLanguage";

const openMenu = ref(null);
const menuWrapRef = ref(null);
const mobileMenuOpen = ref(false);
const { t } = useLanguage();

const toggleMenu = (name) => {
  openMenu.value = openMenu.value === name ? null : name;
};

const handleOutsideClick = (event) => {
  if (menuWrapRef.value && !menuWrapRef.value.contains(event.target)) {
    openMenu.value = null;
  }
};

onMounted(() => document.addEventListener("click", handleOutsideClick));
onBeforeUnmount(() => document.removeEventListener("click", handleOutsideClick));
</script>
