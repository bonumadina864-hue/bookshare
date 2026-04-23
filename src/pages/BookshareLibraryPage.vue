<template>
  <div class="min-h-screen bg-white text-slate-800">
    <header>
      <div class="bg-gray-100 py-1 px-10 text-right text-xs text-blue-900 border-b">
        <a href="#" class="hover:underline">Donate</a> |
        <span class="cursor-pointer">English <i class="fas fa-chevron-down ml-1"></i></span>
      </div>
      <nav class="bg-white py-4 px-6 lg:px-10 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div class="flex items-center space-x-8">
          <div class="text-2xl font-bold text-blue-900 flex items-center">
            <router-link to="/"><img src="https://www.bookshare.org/images/logo_.png" alt="" /></router-link>
          </div>
          <div ref="menuWrapRef" class="relative hidden lg:flex items-center space-x-8 text-base font-semibold text-gray-800">
            <div class="relative">
              <button
                type="button"
                class="rounded-2xl transition"
                :class="openMenu === 'what' ? 'border-2 border-blue-500 px-5 py-2 text-black' : 'px-0 py-0 hover:text-blue-800'"
                @click="toggleMenu('what')"
              >
                What is Bookshare? <i class="fas fa-chevron-down text-[10px]"></i>
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
                Who is Bookshare for? <i class="fas fa-chevron-down text-[10px]"></i>
              </button>
              <div v-if="openMenu === 'who'" class="absolute left-0 top-full z-50 mt-2 w-80 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Parents and students</a>
                <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Educators and schools</a>
                <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Higher education students</a>
                <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Adults</a>
                <a href="#" class="block px-5 py-3 text-base font-normal text-gray-800 hover:bg-gray-100">Global</a>
              </div>
            </div>
            <a href="#" class="hover:text-blue-800">Explore our library</a>
          </div>
        </div>
        <div class="flex items-center space-x-6">
          <router-link to="/login" class="font-bold flex items-center text-gray-800 hover:text-blue-800">
            <i class="far fa-user-circle text-2xl mr-2"></i> Log in
          </router-link>
          <router-link to="/signup" class="bg-[#001529] text-white px-6 py-2 rounded-md font-bold hover:bg-black transition">Sign up</router-link>
        </div>
      </nav>
    </header>

    <main>
      <section class="bg-[linear-gradient(130deg,#1d4ba1_0%,#17418f_100%)] py-16">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-center text-[2.45rem] font-extrabold leading-tight text-white sm:text-left">Bookshare Library</h1>
        </div>
      </section>

      <section class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div class="space-y-5">
          <h2 class="text-[1.85rem] font-bold text-blue-900">Over 1.4 million titles</h2>
          <p class="text-lg leading-8 text-slate-700">
            Bookshare audiobooks and ebooks make reading easy. You can customize your reading experience with assistive reading
            features that remove reading barriers. And with over one million titles, you will find virtually any book for school,
            career, or leisure in one convenient place.
          </p>
          <router-link to="/signup" class="inline-flex rounded-md bg-[#001529] px-7 py-3 text-lg font-bold text-white hover:bg-black">Sign up today</router-link>
        </div>
        <div class="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube.com/embed/w4M7P0qomIo"
            title="Read your way with Bookshare"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section class="bg-slate-50 py-14">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 class="mb-10 text-center text-[2.3rem] font-bold text-blue-900">Books for everyone</h3>
          <div class="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <article v-for="item in features" :key="item.title" class="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-800 text-white">
                <i :class="item.icon" aria-hidden="true"></i>
              </div>
              <h4 class="text-[2rem] font-bold leading-tight text-slate-900">{{ item.title }}</h4>
              <p class="mt-2 text-lg leading-8 text-slate-700">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[linear-gradient(135deg,#8f2f9d_0%,#214790_70%)] py-14">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 class="mb-8 text-center text-[2.3rem] font-bold text-white">Explore our collection</h3>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 xl:gap-5">
            <article v-for="book in books" :key="book.label" class="overflow-hidden rounded-lg bg-white shadow-md">
              <div class="h-64 w-full overflow-hidden">
                <img :src="book.image" :alt="book.label" class="block h-full w-full object-cover object-[center_58%]" />
              </div>
              <p class="min-h-[3.25rem] px-3 pb-2 pt-1 text-xl font-medium leading-tight text-slate-900">{{ book.label }}</p>
            </article>
          </div>
          <div class="mt-8 text-center">
            <a href="#" class="inline-flex items-center gap-2 rounded-md border border-white px-7 py-3 text-lg font-bold text-white hover:bg-white hover:text-blue-900">
              Explore full library <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      <section class="bg-blue-900 py-14">
        <div class="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/01/Ella-and-teacher-smiling-together.jpg"
            alt="Ella and teacher smiling together"
            class="w-full rounded-2xl object-cover"
          />
          <div class="text-white">
            <i class="fas fa-quote-left text-2xl" aria-hidden="true"></i>
            <p class="mt-4 text-[1.8rem] font-bold leading-tight">
              Reading with your ears or any sort of accommodation is still reading and it counts. Any way you can access a book is
              worthwhile. I love to read! Once you find the tools that work for you, it's so much easier.
            </p>
            <a href="#" class="mt-6 inline-flex items-center gap-2 text-lg font-semibold underline">Read Ella's story <i class="fas fa-chevron-right text-xs" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>

      <section
        class="bg-[linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('https://www.bookshare.org/wp-content/uploads/2024/01/Sign-Up-CTA-Section-Desktop.webp')] bg-cover bg-center bg-fixed py-14"
      >
        <div class="mx-auto w-full max-w-3xl rounded-3xl bg-white px-6 py-10 text-center shadow-sm">
          <h3 class="text-[2.4rem] font-extrabold leading-tight text-blue-900">Join Bookshare and enjoy millions of ebooks</h3>
          <router-link to="/signup" class="mt-6 inline-flex rounded-md bg-[#001529] px-7 py-3 text-lg font-bold text-white hover:bg-black">Sign up today</router-link>
          <p class="mt-5 text-lg text-slate-700">
            Still have questions?
            <a href="#" class="font-semibold text-blue-900 underline">Visit help and learning <i class="fas fa-chevron-right text-[10px]" aria-hidden="true"></i></a>
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-blue-900 py-12 text-white">
      <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 border-b border-blue-800 pb-10 sm:grid-cols-3 lg:grid-cols-6">
          <div v-for="column in footerColumns" :key="column.title" class="space-y-2">
            <h4 class="text-lg font-semibold uppercase tracking-wide">{{ column.title }}</h4>
            <a v-for="item in column.items" :key="item" href="#" class="block text-base text-blue-100 hover:underline">{{ item }}</a>
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 items-start gap-5 md:grid-cols-[160px,1fr]">
          <img src="https://www.bookshare.org/wp-content/uploads/2024/04/White_BKS_Logo_2023.png" alt="Bookshare white logo" class="h-9 w-auto" />
          <p class="text-sm leading-7 text-blue-100">
            This project is supported by the U.S. Department of Education, Office of Special Education Programs (Award Number
            H327D220002). Opinions expressed herein are those of the authors and do not necessarily represent the position of the U.S.
            Department of Education.
            <br /><br />
            Bookshare and Benetech are registered trademarks of Beneficent Technology, Inc. Copyright 2026, Beneficent Technology, Inc.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import kitob1 from "../img/kitob1.png";
import kitob2 from "../img/kitob2.png";
import kitob3 from "../img/kitob3.png";
import kitob4 from "../img/kitob4.png";
import kitob5 from "../img/kitob5.png";
import kitob6 from "../img/kitob6.png";

const openMenu = ref(null);
const menuWrapRef = ref(null);

const toggleMenu = (name) => {
  openMenu.value = openMenu.value === name ? null : name;
};

const handleOutsideClick = (event) => {
  if (menuWrapRef.value && !menuWrapRef.value.contains(event.target)) {
    openMenu.value = null;
  }
};

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});

const features = [
  { title: "Trending titles", icon: "fas fa-headphones", description: "Catch up on the newest releases, bestsellers, and popular titles that your friends or book club are reading" },
  { title: "Educational books", icon: "fas fa-book-open", description: "Learn with textbooks, educational materials, career resources, and more for students of all ages" },
  { title: "Free public domain", icon: "fas fa-globe", description: "Access over 10,000 public domain books freely available to anyone around the world" },
  { title: "Easy-to-read formats", icon: "fas fa-headphones", description: "Listen in audio, follow along with karaoke-style highlighting, read in large font, braille, and more" },
  { title: "No limits", icon: "fas fa-book-open", description: "Read as many books as you want, no wait times or due dates" },
  { title: "Over 40 languages", icon: "fas fa-globe", description: "Find books in over 40 languages, including Spanish, French, Hindi, and more" },
];

const books = [
  { label: "Popular last month", image: kitob1 },
  { label: "New York Times fiction", image: kitob2 },
  { label: "Popular with kids", image: kitob3 },
  { label: "Common Core textbooks", image: kitob4 },
  { label: "Career resources", image: kitob5 },
  { label: "Bilingual books", image: kitob6 },
];

const footerColumns = [
  { title: "ABOUT", items: ["Who we are", "Careers", "Events", "Media Kit"] },
  { title: "GET INVOLVED", items: ["Donate", "Partner with us"] },
  { title: "HELP", items: ["Help and learning center", "Contact us", "Site map"] },
  { title: "LEGAL", items: ["Legal", "Privacy", "Accessibility"] },
  { title: "FOLLOW US", items: ["Our blog", "Facebook", "Instagram", "X", "Youtube"] },
  { title: "DOWNLOAD APP", items: ["Apple/iOS", "Google/Android", "Amazon Alexa"] },
];
</script>
