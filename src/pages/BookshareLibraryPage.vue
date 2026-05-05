<template>
  <div class="min-h-screen bg-white text-slate-800">
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

      <section class="bg-gradient-to-br from-[#802080] via-[#501060] to-[#201040] py-20">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="py-20">
            <h3 class="mb-4 text-center text-4xl font-bold text-white lg:text-5xl">Explore the world's biggest accessible library</h3>
            <p class="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-300">
              Discover trending and award-winning titles for every reader.
            </p>

            <h4 class="mb-5 text-2xl font-bold text-white">New and trending</h4>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <article v-for="book in trendingBooks" :key="book.label" class="overflow-hidden">
                <div class="aspect-[2/3] w-full overflow-hidden rounded-t-xl bg-gray-400">
                  <img :src="book.image" :alt="book.label" class="h-full w-full object-cover" />
                </div>
                <p class="rounded-b-xl bg-white p-3 text-center text-sm font-semibold text-black">
                  {{ book.label }}
                </p>
              </article>
            </div>
            <div class="mt-8 text-center">
              <a href="#" class="inline-flex items-center gap-2 rounded-md border border-white bg-[#1a365d] px-7 py-3 text-base font-bold text-white">
                Explore library <span aria-hidden="true">-></span>
              </a>
            </div>
          </div>

          <div class="py-20">
            <h3 class="mb-4 text-center text-4xl font-bold text-white lg:text-5xl">Explore books for K-12 students</h3>
            <p class="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-300">
              Browse curated categories for elementary, middle, and high school readers.
            </p>

            <h4 class="mb-5 text-2xl font-bold text-white">Award winning</h4>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <article v-for="book in k12Books" :key="book.label" class="overflow-hidden">
                <div class="aspect-[2/3] w-full overflow-hidden rounded-t-xl bg-gray-400">
                  <img :src="book.image" :alt="book.label" class="h-full w-full object-cover" />
                </div>
                <p class="rounded-b-xl bg-white p-3 text-center text-sm font-semibold leading-tight text-black">
                  {{ book.label }}
                </p>
              </article>
            </div>
            <div class="mt-8 text-center">
              <a href="#" class="inline-flex items-center gap-2 rounded-md border border-white bg-[#1a365d] px-7 py-3 text-base font-bold text-white">
                Explore full library <span aria-hidden="true">-></span>
              </a>
            </div>
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
  </div>
</template>

<script setup>
import kitob1 from "../img/kitob1.png";
import kitob2 from "../img/kitob2.png";
import kitob3 from "../img/kitob3.png";
import kitob4 from "../img/kitob4.png";
import kitob5 from "../img/kitob5.png";
import kitob6 from "../img/kitob6.png";

const features = [
  { title: "Trending titles", icon: "fas fa-headphones", description: "Catch up on the newest releases, bestsellers, and popular titles that your friends or book club are reading" },
  { title: "Educational books", icon: "fas fa-book-open", description: "Learn with textbooks, educational materials, career resources, and more for students of all ages" },
  { title: "Free public domain", icon: "fas fa-globe", description: "Access over 10,000 public domain books freely available to anyone around the world" },
  { title: "Easy-to-read formats", icon: "fas fa-headphones", description: "Listen in audio, follow along with karaoke-style highlighting, read in large font, braille, and more" },
  { title: "No limits", icon: "fas fa-book-open", description: "Read as many books as you want, no wait times or due dates" },
  { title: "Over 40 languages", icon: "fas fa-globe", description: "Find books in over 40 languages, including Spanish, French, Hindi, and more" },
];

const trendingBooks = [
  { label: "Popular last month", image: kitob1 },
  { label: "New on Bookshare", image: kitob2 },
  { label: "NY Times fiction", image: kitob3 },
  { label: "NY Times non-fiction", image: kitob4 },
  { label: "Most read in school", image: kitob5 },
  { label: "Staff picks", image: kitob6 },
];

const k12Books = [
  { label: "Newbery Award Winners", image: kitob1 },
  { label: "Animals", image: kitob2 },
  { label: "Books in Spanish", image: kitob3 },
  { label: "Accelerated Reader Middle School", image: kitob4 },
  { label: "Young Reader's Series", image: kitob5 },
  { label: "High Interest Young Adult", image: kitob6 },
];
</script>
