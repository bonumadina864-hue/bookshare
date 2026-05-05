<template>
  <div class="min-h-screen bg-white font-sans">
    <MainHeader />

    <main>
      <section class="bg-library-gradient py-24 md:py-32">
        <div class="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
          <h1 class="text-6xl font-bold leading-none text-white md:text-7xl">
            Explore our library
          </h1>

          <nav
            aria-label="Explore library categories"
            class="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 text-base md:text-lg"
          >
            <a
              v-for="item in subLinks"
              :key="item"
              href="#"
              class="inline-flex items-center gap-2 font-semibold text-white underline underline-offset-2 transition-opacity duration-200 hover:opacity-85"
            >
              <span>{{ item }}</span>
              <i class="fas fa-chevron-right text-[11px]" aria-hidden="true"></i>
            </a>
          </nav>
        </div>
      </section>

      <section class="bg-white px-4 py-16">
        <div class="mx-auto w-full max-w-[1260px]">
          <h2 class="mb-8 text-5xl font-bold leading-none text-[#0b3d91]">Featured collections</h2>

          <article class="rounded-xl bg-[#fbfcfd] p-6 shadow-sm">
            <h3 class="text-[44px] font-bold leading-none tracking-tight text-[#0b3d91]">New and trending 🔥</h3>
            <p class="mt-2 text-lg leading-tight text-slate-600">Explore our recently added and popular titles.</p>

            <div class="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              <a
                v-for="book in trendingBooks"
                :key="book.title"
                href="#"
                class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
              >
                <img
                  :src="book.image"
                  :alt="book.title"
                  class="aspect-[3/4] w-full rounded-t-lg object-cover"
                />
                <div class="h-[52px] overflow-hidden px-3 py-2 text-left text-[20px] font-semibold leading-[1.05] text-slate-800">
                  {{ book.title }}
                </div>
              </a>
            </div>
          </article>

          <article class="mt-8 rounded-xl bg-[#fbfcfd] p-6 shadow-sm">
            <h3 class="text-[44px] font-bold leading-none tracking-tight text-[#0b3d91]">Featured this month ✨</h3>
            <p class="mt-2 text-lg leading-tight text-slate-600">Check out our spotlight special collections.</p>

            <div class="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              <a
                v-for="book in featuredBooks"
                :key="book.title"
                href="#"
                class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
              >
                <img
                  :src="book.image"
                  :alt="book.title"
                  class="aspect-[3/4] w-full rounded-t-lg object-cover"
                />
                <div class="h-[52px] overflow-hidden px-3 py-2 text-left text-[20px] font-semibold leading-[1.05] text-slate-800">
                  {{ book.title }}
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import MainHeader from "../components/MainHeader.vue";
import sixCover from "/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-booksharee/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_ad2e592e94dee4124e4b09c1ebc8a0f6_images_image-d967eef8-f59e-4179-af48-00d61c8b0e51.png";
import songCover from "/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-booksharee/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_ad2e592e94dee4124e4b09c1ebc8a0f6_images_image-8c2bb462-4e85-4fd3-919c-91ed7e32b4d4.png";
import percyCover from "/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-booksharee/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_ad2e592e94dee4124e4b09c1ebc8a0f6_images_image-8abe3e64-6d95-404d-9457-af5c5ebd8a42.png";
import marrowCover from "/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-booksharee/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_ad2e592e94dee4124e4b09c1ebc8a0f6_images_image-c7e445d0-9a24-4b0a-b83e-1f312c04636a.png";
import disabilityCover from "/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-booksharee/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_ad2e592e94dee4124e4b09c1ebc8a0f6_images_image-1b2033ee-3a0f-4607-b762-fa45716f0975.png";

const subLinks = [
  "Human-narrated books",
  "Magazines and newspapers",
  "Browse by language",
  "Special collections",
];

const trendingBooks = [
  {
    title: "Popular last month",
    image: "https://www.bookshare.org/wp-content/uploads/2024/01/1P6VYKiu24lytaX_rQ-_fBDfu1Oqx5C5NSTE8CdyGhY-MEDIUM.jpg",
  },
  {
    title: "New on Bookshare",
    image: "https://www.bookshare.org/wp-content/uploads/2024/01/hWe88P2MOfd1rq-tK0CfoIJF0GKX4vnC6uJzcgNKV9Q-MEDIUM.jpg",
  },
  {
    title: "NY Times fiction",
    image: "https://www.bookshare.org/wp-content/uploads/2024/01/ft8-sOmjeroYDBN_DT6NDjT-NPYiDyJo7v67FCEdNl8-MEDIUM.jpg",
  },
  {
    title: "NY Times nonfiction",
    image: "https://www.bookshare.org/wp-content/uploads/2024/01/340yZg4_gpxOONRQeLWW07EIXjyhJXq0h2FDtb2WBqo-MEDIUM.jpg",
  },
  {
    title: "Popular teen books",
    image: "https://www.bookshare.org/wp-content/uploads/2024/02/not-dead-enough-12.jpg",
  },
  {
    title: "Popular kid’s books",
    image: "https://www.bookshare.org/wp-content/uploads/2024/01/ug6tQEFLNeak2lrWoGAwtdxOWWGzd3glpSV5WvkDPYE-MEDIUM.jpg",
  },
];

const featuredBooks = [
  {
    title: "Women’s History...",
    image: sixCover,
  },
  {
    title: "Women’s Prize for...",
    image: songCover,
  },
  {
    title: "2025 Accessibilit...",
    image: percyCover,
  },
  {
    title: "#NativeRea... for Kids an...",
    image: marrowCover,
  },
  {
    title: "2025 Internation...",
    image: disabilityCover,
  },
];
</script>

<style scoped>
.bg-library-gradient {
  background: linear-gradient(121deg, #8a2387 0%, #1a4696 100%);
}
</style>
