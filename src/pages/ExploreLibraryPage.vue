<template>
  <div class="min-h-screen bg-white font-sans">
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

      <section class="bg-white px-4 py-20">
        <div class="mx-auto w-full max-w-[1260px]">
          <h2 class="mb-10 text-4xl font-bold text-[#0b3d91]">Featured collections</h2>

          <article class="rounded-xl bg-[#f9f9f9] p-10">
            <h3 class="text-2xl font-bold text-black">New and trending 🔥</h3>
            <p class="mt-2 text-[15px] text-gray-700">Explore our recently added and popular titles.</p>

            <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              <a
                v-for="book in trendingBooks"
                :key="book.title"
                href="#"
                class="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                <img
                  :src="book.image"
                  :alt="book.title"
                  class="aspect-[2/3] w-full object-cover"
                />
                <div class="flex flex-1 items-start px-3 py-3 text-left text-[15px] leading-snug text-slate-900">
                  {{ book.title }}
                </div>
              </a>
            </div>
          </article>

          <article class="mt-12 rounded-xl bg-[#f9f9f9] p-10">
            <h3 class="text-2xl font-bold text-black">Featured this month ✨</h3>
            <p class="mt-2 text-[15px] text-gray-700">Check out our spotlight special collections.</p>

            <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <a
                v-for="book in featuredBooks"
                :key="book.title"
                href="#"
                class="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                <img
                  :src="book.image"
                  :alt="book.title"
                  class="aspect-[2/3] w-full object-cover"
                />
                <div class="flex flex-1 items-start px-3 py-3 text-left text-[15px] leading-snug text-slate-900">
                  {{ book.title }}
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="bg-[#133c76] px-4 py-16">
        <div class="mx-auto flex w-full max-w-[1260px] flex-col items-center">
          <h2 class="text-[32px] font-bold tracking-tight text-white">Jump to a category</h2>
          
          <nav aria-label="Categories" class="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Kids</a>
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Teens</a>
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Educators</a>
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Adults</a>
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Award Winning</a>
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Disability Themed</a>
            <a href="#" class="rounded-full bg-[#e6f5f0] px-8 py-3 text-[16px] font-bold text-[#0b3d91] transition hover:bg-teal-100">Spanish</a>
          </nav>

          <a href="#" class="mt-8 inline-flex items-center gap-1.5 text-base font-bold text-white transition-opacity hover:opacity-85">
            <span class="underline underline-offset-4">Browse all categories</span>
            <i class="fas fa-chevron-right text-[13px]" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <section class="bg-white px-4 py-20">
        <div class="mx-auto w-full max-w-[1260px]">

          <article class="mt-20 border-b border-gray-200 pb-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Kids</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more books for kids
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div v-for="collection in kidsCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>

          <article class="mt-20 border-b border-gray-200 pb-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Teens</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more books for teens
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <div v-for="collection in teensCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>

          <article class="mt-20 border-b border-gray-200 pb-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Educators</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more books for educators
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
              <div v-for="collection in educatorsCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>

          <article class="mt-20 border-b border-gray-200 pb-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Adults</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more books for adults
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <div v-for="collection in adultsCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>

          <article class="mt-20 border-b border-gray-200 pb-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Award winning</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more award winners
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
              <div v-for="collection in awardCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>

          <article class="mt-20 border-b border-gray-200 pb-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Disability themed</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more disability themed books
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
              <div v-for="collection in disabilityCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>

          <article class="mt-20">
            <div class="flex items-center justify-between">
              <h2 class="text-4xl font-bold text-[#0b3d91]">Spanish</h2>
              <a href="#" class="flex items-center gap-2 text-[15px] font-bold text-[#0b3d91] hover:underline">
                Find more Spanish books
                <i class="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
              <div v-for="collection in spanishCollections" :key="collection.title" class="flex flex-col">
                <div class="group relative aspect-[2/3] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <img :src="collection.image" :alt="collection.title" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h4 class="mt-4 text-[16px] font-semibold leading-snug text-gray-900">{{ collection.title }}</h4>
              </div>
            </div>
            <div class="mt-12 flex justify-end">
              <button class="rounded-md bg-[#0b3d91] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#093175]">Back to categories</button>
            </div>
          </article>
        </div>
      </section>

      <section class="bg-[#f0f4f8] px-4 py-16">
        <div class="mx-auto w-full max-w-[1000px] xl:max-w-[1100px]">
          <h2 class="mb-12 text-center text-[40px] font-bold text-[#111]">Need help?</h2>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a href="#" class="flex min-h-[100px] items-center gap-5 rounded-md border border-[#1c4e9d] border-l-[8px] bg-white px-6 py-6 transition-shadow hover:shadow-md">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1c4e9d] text-white">
                <i class="fas fa-question text-[15px]"></i>
              </div>
              <span class="text-[16px] leading-tight text-gray-800">How do I find books?</span>
            </a>
            
            <a href="#" class="flex min-h-[100px] items-center gap-5 rounded-md border border-[#1c4e9d] border-l-[8px] bg-white px-6 py-6 transition-shadow hover:shadow-md">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1c4e9d] text-white">
                <i class="fas fa-question text-[15px]"></i>
              </div>
              <span class="text-[16px] leading-tight text-gray-800">What books are available to me?</span>
            </a>

            <a href="#" class="flex min-h-[100px] items-center gap-5 rounded-md border border-[#1c4e9d] border-l-[8px] bg-white px-6 py-6 transition-shadow hover:shadow-md">
              <div class="flex h-[32px] w-[32px] shrink-0 items-center justify-center text-[#1c4e9d]">
                <i class="fas fa-laptop text-[24px]"></i>
              </div>
              <span class="text-[16px] leading-tight text-gray-800">Where do I find Human-<br/>Narrated Books?</span>
            </a>
          </div>

          <div class="mt-10 text-center text-[15px] text-[#333]">
            Still have questions? <a href="#" class="font-bold text-[#0b3d91] hover:underline underline-offset-2">Visit help and learning <i class="fas fa-chevron-right ml-0.5 text-[11px]" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import featured1Cover from "../img/featured1.png";
import featured2Cover from "../img/featured2.png";
import kids1 from "../img/kids1.jpg";
import kids2 from "../img/kids2.jpg";
import kids3 from "../img/kids3.jpg";
import kids4 from "../img/kids4.jpg";
import kids5 from "../img/kids5.jpg";
import teens1 from "../img/teens1.jpg";
import teens2 from "../img/teens2.jpg";
import teens3 from "../img/teens3.jpg";
import teens4 from "../img/teens4.jpg";
import teens5 from "../img/teens5.jpg";
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
    image: "https://covers.openlibrary.org/b/isbn/9780593492918-L.jpg",
  },
  {
    title: "New on Bookshare",
    image: "https://covers.openlibrary.org/b/isbn/9780762483815-L.jpg",
  },
  {
    title: "NY Times fiction",
    image: "https://covers.openlibrary.org/b/isbn/9780316563765-L.jpg",
  },
  {
    title: "NY Times nonfiction",
    image: "https://covers.openlibrary.org/b/isbn/9780593578797-L.jpg",
  },
  {
    title: "Popular teen books",
    image: "https://covers.openlibrary.org/b/isbn/9781250230232-L.jpg",
  },
  {
    title: "Popular kid’s books",
    image: "https://covers.openlibrary.org/b/isbn/9780786838653-L.jpg",
  },
];

const featuredBooks = [
  {
    title: "Women’s History...",
    image: featured1Cover,
  },
  {
    title: "Women’s Prize for...",
    image: featured2Cover,
  },
  {
    title: "Percy Jackson",
    image: percyCover,
  },
  {
    title: "Marrow Thieves",
    image: marrowCover,
  },
  {
    title: "2025 Internation...",
    image: disabilityCover,
  },
];

const kidsCollections = [
  {
    title: "Newbery Award winners",
    image: kids1
  },
  {
    title: "Animals",
    image: kids2
  },
  {
    title: "Mejores libros para pequeños",
    image: kids3
  },
  {
    title: "World records",
    image: kids4
  },
  {
    title: "Bunnicula and Friends",
    image: kids5
  }
];

const teensCollections = [
  {
    title: "Imani's Moon",
    image: "https://images.gr-assets.com/books/1406853609l/23168541.jpg",
  },
  {
    title: "The Inheritance Games",
    image: "https://images.gr-assets.com/books/1585061616l/52439531.jpg",
  },
  {
    title: "Killer Fortnite Strategies",
    image: "https://covers.openlibrary.org/b/isbn/9781631584633-L.jpg",
  },
  {
    title: "Shapeshifter",
    image: "https://covers.openlibrary.org/b/isbn/9781554691586-L.jpg",
  },
  {
    title: "The Maze Runner",
    image: "https://images.gr-assets.com/books/1375596592l/6186357.jpg",
  },
  {
    title: "The Hunger Games",
    image: "https://images.gr-assets.com/books/1586722975l/2767052.jpg",
  },
];

const educatorsCollections = [
  {
    title: "The Kite Runner",
    image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
  },
  {
    title: "Pax",
    image: "https://covers.openlibrary.org/b/isbn/9780062377029-L.jpg",
  },
  {
    title: "Wonder",
    image: "https://covers.openlibrary.org/b/isbn/9780375869020-L.jpg",
  },
  {
    title: "The Secret Garden",
    image: "https://covers.openlibrary.org/b/isbn/9780451528834-L.jpg",
  },
  {
    title: "Vincent van Gogh: Portrait of an Artist",
    image: "https://covers.openlibrary.org/b/isbn/9780440419174-L.jpg",
  },
  {
    title: "Moonshot: The Flight of Apollo 11",
    image: "https://covers.openlibrary.org/b/isbn/9781416950462-L.jpg",
  },
];

const adultsCollections = [
  {
    title: "Before I Say Goodbye",
    image: "https://covers.openlibrary.org/b/isbn/9780671004576-L.jpg",
  },
  {
    title: "The Corrections",
    image: "https://covers.openlibrary.org/b/isbn/9780312421274-L.jpg",
  },
  {
    title: "I Know Why the Caged Bird Sings",
    image: "https://covers.openlibrary.org/b/isbn/9780345514400-L.jpg",
  },
  {
    title: "Almanac of the Dead",
    image: "https://covers.openlibrary.org/b/isbn/9780140173192-L.jpg",
  },
  {
    title: "Caraval",
    image: "https://covers.openlibrary.org/b/isbn/9781250095251-L.jpg",
  },
  {
    title: "The Great Gatsby",
    image: "https://images.gr-assets.com/books/1490528560l/4671.jpg",
  },
];

const awardCollections = [
  {
    title: "A Snake Falls to Earth",
    image: "https://covers.openlibrary.org/b/isbn/9781646140923-L.jpg",
  },
  {
    title: "The Words We Keep",
    image: "https://covers.openlibrary.org/b/isbn/9781984848864-L.jpg",
  },
  {
    title: "Liliana's Invincible Summer",
    image: "https://books.google.com/books/content?vid=ISBN9781984855169&printsec=frontcover&img=1&zoom=1",
  },
  {
    title: "Freewater",
    image: "https://covers.openlibrary.org/b/isbn/9780316056618-L.jpg",
  },
  {
    title: "Inheritors",
    image: "https://books.google.com/books/content?vid=ISBN9780385545389&printsec=frontcover&img=1&zoom=1",
  },
  {
    title: "Lessons in Chemistry",
    image: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg",
  },
];

const disabilityCollections = [
  {
    title: "The Dark Days of Hamburger Halpin",
    image: "https://books.google.com/books/content?vid=ISBN9780375856990&printsec=frontcover&img=1&zoom=1",
  },
  {
    title: "How to Be Autistic",
    image: "https://images.gr-assets.com/books/1560945781l/45731771.jpg",
  },
  {
    title: "Quality Indicators for Assistive Technology",
    image: "https://covers.openlibrary.org/b/isbn/9780989867450-L.jpg",
  },
  {
    title: "Freak the Mighty",
    image: "https://books.google.com/books/content?vid=ISBN9780439286060&printsec=frontcover&img=1&zoom=1",
  },
  {
    title: "Okay for Now",
    image: "https://images.gr-assets.com/books/1360057161l/10444365.jpg",
  },
  {
    title: "My Brother Charlie",
    image: "https://images.gr-assets.com/books/1327932646l/7854612.jpg",
  },
];

const spanishCollections = [
  { title: "Cuentos", image: "https://images.gr-assets.com/books/1585864387l/44331002.jpg" },
  { title: "Darko", image: "https://images.gr-assets.com/books/1524386820l/39934376.jpg" },
  { title: "Tu no matarás", image: "https://images.gr-assets.com/books/1539265103l/42281898.jpg" },
  { title: "Lola", image: "https://images.gr-assets.com/books/1521743621l/39327504.jpg" },
  { title: "Crepúsculo", image: "https://images.gr-assets.com/books/1553578762l/44583163.jpg" },
  { title: "Cien años de soledad", image: "https://images.gr-assets.com/books/1327881361l/320.jpg" }
];
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.bg-library-gradient {
  background: linear-gradient(121deg, #8a2387 0%, #1a4696 100%);
}
</style>
