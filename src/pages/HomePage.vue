<template>
  <div class="bg-white">
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
          <router-link to="/signup" class="bg-dark-navy text-white px-6 py-2 rounded-md font-bold hover:bg-black transition">Sign up</router-link>
        </div>
      </nav>
    </header>

    <section class="bg-bookshare-blue text-white pt-16 pb-12 text-center">
      <h1 class="text-6xl font-bold mb-6">Get ready for summer reading</h1>
      <p class="text-xl mb-10 opacity-90 max-w-3xl mx-auto">Lock in this years gains for your students with an Individual Membership.</p>
      <div class="flex justify-center items-center space-x-6 mb-16">
        <router-link to="/learn-more" class="font-bold border-b-2 border-white pb-1 hover:opacity-80">Learn more ></router-link>
        <router-link to="/signup" class="border-2 border-white px-7 py-4 rounded-md font-bold hover:bg-white hover:text-blue-800 transition">Sign up</router-link>
      </div>
      <div class="flex justify-center">
        <img src="https://www.bookshare.org/wp-content/uploads/2026/04/students_classroom_laptop-768x767.png" alt="Hero image" style="width: 536px; height: auto" />
      </div>
    </section>

    <section class="py-24 bg-white px-10">
      <h2 class="text-5xl font-bold text-center text-blue-900 mb-20">Read and learn easier</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <div class="bg-[#143d8d] text-white p-10 rounded-lg hover:shadow-2xl transition duration-300">
          <div class="bg-white text-blue-900 w-12 h-12 flex items-center justify-center rounded-md mb-6 shadow-lg">
            <i class="fas fa-headphones text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 leading-tight">Assisted reading</h3>
          <p class="text-sm opacity-85 leading-relaxed">Listen to words read aloud, follow with karaoke-style highlighting, enlarge text, or read in braille.</p>
        </div>

        <div class="bg-[#143d8d] text-white p-10 rounded-lg hover:shadow-2xl transition duration-300">
          <div class="bg-white text-blue-900 w-12 h-12 flex items-center justify-center rounded-md mb-6 shadow-lg">
            <i class="fas fa-book text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 leading-tight">Over 1.3 million titles</h3>
          <p class="text-sm opacity-85 leading-relaxed">Bestsellers, children's books, educational titles, career resources, and many more.</p>
        </div>

        <div class="bg-[#143d8d] text-white p-10 rounded-lg hover:shadow-2xl transition duration-300">
          <div class="bg-white text-blue-900 w-12 h-12 flex items-center justify-center rounded-md mb-6 shadow-lg">
            <i class="fas fa-globe text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 leading-tight">10,000 freely available</h3>
          <p class="text-sm opacity-85 leading-relaxed">Huge collection of public domain books available to anyone around the world for free.</p>
        </div>

        <div class="bg-[#143d8d] text-white p-10 rounded-lg hover:shadow-2xl transition duration-300">
          <div class="bg-white text-blue-900 w-12 h-12 flex items-center justify-center rounded-md mb-6 shadow-lg">
            <i class="fas fa-users text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 leading-tight">No wait reading</h3>
          <p class="text-sm opacity-85 leading-relaxed">Read as many books as you want, no wait times or due dates.</p>
        </div>
      </div>
      <div class="text-center mt-12">
        <a href="#" class="text-blue-700 font-bold hover:underline">Learn about the Bookshare library ></a>
      </div>
    </section>

    <div class="bg-[#23529c] py-14 text-center">
      <h1 class="text-white text-[44px] font-bold tracking-tight">Learn for a lifetime</h1>
    </div>

    <div class="flex flex-col md:flex-row w-full">
      <a href="#" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://cdn.allaboutcookies.org/696x400/filters:quality(100)/images/2022/11/28/mother-daughter-iphone-parental-controls.jpeg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Parents and students</h3>
          <p class="text-[14px] leading-snug opacity-90">Help your child build reading skills and a passion for learning at home.</p>
        </div>
      </a>

      <a href="#" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://www.bookshare.org/wp-content/uploads/2024/02/Teacher-holding-tablet-in-computer-lab.jpg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Educators and schools</h3>
          <p class="text-[14px] leading-snug opacity-90">Help students build literacy skills and accelerate learning.</p>
        </div>
      </a>

      <a href="#" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://www.pocklington.org.uk/wp-content/uploads/2024/09/young-student-with-a-pile-of-books-holding-a-book-smiling-and-looking-up-lr-scaled-aspect-ratio-750-425.jpg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Higher education students</h3>
          <p class="text-[14px] leading-snug opacity-90">Find all your course books in easy-to-read formats that work for you.</p>
        </div>
      </a>

      <a href="#" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://news.ki.se/sites/nyheter/files/styles/article_full_width/public/qbank/GettyImages-2191411104_custom20260421081229.webp" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Adults</h3>
          <p class="text-[14px] leading-snug opacity-90">Read and learn anything you want with books on every topic or interest.</p>
        </div>
      </a>

      <a href="#" class="relative flex-1 h-[450px] group overflow-hidden flex flex-col justify-end">
        <img src="https://www.bookshare.org/wp-content/uploads/2024/02/Teacher-helping-students-in-classroom-with-tablets.jpg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-5 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Global</h3>
          <p class="text-[14px] leading-snug opacity-90">Learn around the world with books for students and adults in over 40 languages.</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

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
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.bg-bookshare-blue {
  background-color: #003082;
}
.bg-dark-navy {
  background-color: #001529;
}
</style>
