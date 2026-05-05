<template>
  <div class="bg-white">
    <section class="bg-bookshare-blue text-white pt-16 pb-12 text-center">
      <h1 class="text-6xl font-bold mb-6">{{ t("heroTitle") }}</h1>
      <p class="text-xl mb-10 opacity-90 max-w-3xl mx-auto">{{ t("heroSubtitle") }}</p>
      <div class="flex justify-center items-center space-x-6 mb-16">
        <router-link to="/learn-more" class="font-bold border-b-2 border-white pb-1 hover:opacity-80">{{ t("heroLearnMore") }}</router-link>
        <router-link to="/signup" class="border-2 border-white px-7 py-4 rounded-md font-bold hover:bg-white hover:text-blue-800 transition">{{ t("heroSignup") }}</router-link>
      </div>
      <div class="flex justify-center bg-bookshare-blue">
        <img class="hero-circle-image block" src="https://www.bookshare.org/wp-content/uploads/2026/04/students_classroom_laptop-768x767.png" alt="Hero image" style="width: 536px; height: auto" />
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
      <router-link to="/learn-for" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://cdn.allaboutcookies.org/696x400/filters:quality(100)/images/2022/11/28/mother-daughter-iphone-parental-controls.jpeg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Parents and students</h3>
          <p class="text-[14px] leading-snug opacity-90">Help your child build reading skills and a passion for learning at home.</p>
        </div>
      </router-link>

      <router-link to="/educators-and-schools" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://www.bookshare.org/wp-content/uploads/2024/02/Teacher-holding-tablet-in-computer-lab.jpg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Educators and schools</h3>
          <p class="text-[14px] leading-snug opacity-90">Help students build literacy skills and accelerate learning.</p>
        </div>
      </router-link>

      <router-link to="/higher-education-students" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://www.pocklington.org.uk/wp-content/uploads/2024/09/young-student-with-a-pile-of-books-holding-a-book-smiling-and-looking-up-lr-scaled-aspect-ratio-750-425.jpg" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Higher education students</h3>
          <p class="text-[14px] leading-snug opacity-90">Find all your course books in easy-to-read formats that work for you.</p>
        </div>
      </router-link>

      <router-link to="/adults" class="relative flex-1 h-[450px] group overflow-hidden border-r border-white/20 last:border-0 flex flex-col justify-end">
        <img src="https://news.ki.se/sites/nyheter/files/styles/article_full_width/public/qbank/GettyImages-2191411104_custom20260421081229.webp" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4789] via-[#1a4789] via-25% to-transparent opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]"></div>
        <div class="relative p-6 pb-10 text-white z-10">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Adults</h3>
          <p class="text-[14px] leading-snug opacity-90">Read and learn anything you want with books on every topic or interest.</p>
        </div>
      </router-link>

      <router-link to="/global" class="relative flex-1 h-[450px] group overflow-hidden flex flex-col justify-end">
        <img src="/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-boookshare/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_924acba6fb5f966a6ba633c59207f57f_images_image-69de2bc2-24e5-4a03-85a5-e94cccc40a42.png" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1a4696] via-[#1a4696]/85 via-45% to-white/15 opacity-100 transition-colors duration-300 group-hover:from-[#23529c] group-hover:via-[#23529c]/90"></div>
        <div class="relative z-10 p-7 pb-8 text-white">
          <h3 class="text-[22px] font-bold mb-3 leading-tight">Global</h3>
          <p class="text-[14px] leading-snug opacity-90">Learn around the world with books for students and adults in over 40 languages.</p>
        </div>
      </router-link>
    </div>

    <section class="reader-section">
      <div class="reader-inner">
        <div class="reader-left">
          <h2>Bookshare Reader</h2>
          <p>
            Read easily with our free reading app for web browsers, smartphones,
            tablets, and Alexa-enabled smart speakers.
          </p>

          <ul>
            <li>Find and read books directly in the app</li>
            <li>Listen to books in high quality audio</li>
            <li>Follow along with karaoke-style highlighting</li>
          </ul>

          <a href="#" class="reader-link">Learn about Bookshare Reader <span>></span></a>

          <div class="store-buttons">
            <a href="#" class="store-badge-link">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/Apple-App-Store.png" alt="Download on the App Store" />
            </a>
            <a href="#" class="store-badge-link">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/google-play-badge.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>

        <div class="reader-right">
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/02/Devices-w-Bookshare-Reader.png"
            alt="Bookshare Reader devices"
          />
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-[#4c1d95] to-[#1e1b4b] text-white py-16 px-6 md:px-10">
      <div class="max-w-7xl mx-auto font-sans">
        <h2 class="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-12">
          Explore the world’s biggest<br />
          accessible ebook library
        </h2>

        <div class="mb-10">
          <h3 class="text-4xl font-bold mb-4">New and trending</h3>
          <p class="text-gray-300 text-lg mb-7">Check out all of our recently added and popular titles.</p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/1P6VYKiu24lytaX_rQ-_fBDfu1Oqx5C5NSTE8CdyGhY-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Popular last month</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/hWe88P2MOfd1rq-tK0CfoIJF0GKX4vnC6uJzcgNKV9Q-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">New on Bookshare</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/ft8-sOmjeroYDBN_DT6NDjT-NPYiDyJo7v67FCEdNl8-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">NY Times fiction</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/340yZg4_gpxOONRQeLWW07EIXjyhJXq0h2FDtb2WBqo-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">NY Times nonfiction</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/02/not-dead-enough-12.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Popular teen books</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/ug6tQEFLNeak2lrWoGAwtdxOWWGzd3glpSV5WvkDPYE-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Popular kid’s books</div>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-4xl font-bold mb-4">Award winning</h3>
          <p class="text-gray-300 text-lg mb-7">Explore all of the top critically acclaimed titles.</p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/p-C-Jf1y7QwTOAuu2hYEfWn7lqMpiFytwcG72f436ys-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Newbery Award winners</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/UB1DBlxcqMdXVeCGMdSw6mBrD2gOwk-KdCx6dDqu8NU-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Schneider Family Book Award</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/05/liliana-9780593244111.jpeg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Pulitzer Prize Award Winners</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/MY5HdIkd8suZP7_MqzZvmmNyl36YUcttekgGH9qxs7o-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Coretta Scott King Book Awards</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/02/inheritors.jpeg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">PEN Open Book Award</div>
            </a>
            <a href="#" class="rounded-lg overflow-hidden bg-white text-black">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/4OqugRbur4kCYMyadaLiIrZGaYYrJApR92HK6LuzlbU-MEDIUM.jpg" class="w-full aspect-[2/3] object-cover" />
              <div class="bg-white px-3 py-2 text-center text-[14px] leading-tight min-h-[62px] flex items-center justify-center">Goodreads Choice Award</div>
            </a>
          </div>
        </div>

        <div class="text-center mt-8">
          <a href="#" class="inline-flex items-center gap-2 bg-[#0b3c90] hover:bg-[#1247a1] text-white font-semibold px-7 py-3 rounded-lg border border-[#8ec5ff] transition">
            Explore library <span>→</span>
          </a>
        </div>
      </div>
    </section>

    <section id="who-we-are" class="bg-white py-20 px-6 scroll-mt-24">
      <div class="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 class="text-[#1a365d] font-bold text-5xl mb-10">Our partners</h2>

        <p class="text-gray-700 text-lg max-w-4xl mb-12">
          Bookshare® is only possible with the huge support from the US Department of Education and other partners.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-12 mb-12">
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/01/IdeasthatWork_png-1.webp"
            alt="IDEAS that Work"
            class="h-16 w-auto object-contain"
          />
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/01/Macmillan-Logo-scaled-1.webp"
            alt="macmillan learning"
            class="h-14 w-auto object-contain"
          />
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/01/cela-logo-1.webp"
            alt="CELA"
            class="h-16 w-auto object-contain"
          />
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/01/RNIB-logo-1.webp"
            alt="RNIB"
            class="h-16 w-auto object-contain"
          />
        </div>

        <p class="text-gray-700 text-2xl leading-relaxed">
          Interested in getting involved?<br />
          Consider
          <a href="#" class="text-blue-600 underline">donating</a>
          or
          <a href="#" class="text-blue-600 underline">partnering with us</a>.
        </p>
      </div>
    </section>

    <section
      class="relative py-14 px-4 md:px-6 bg-cover bg-center bg-fixed"
      style="background-image: url('https://www.bookshare.org/wp-content/uploads/2024/01/Sign-Up-CTA-Section-Desktop.webp')"
    >
      <div class="absolute inset-0 bg-black/45"></div>

      <div class="relative max-w-6xl mx-auto bg-white rounded-[30px] py-12 px-8 md:py-16 md:px-10 flex flex-col items-center text-center space-y-8">
        <h2 class="text-[#003366] font-extrabold text-4xl md:text-6xl leading-tight">
          Join Bookshare and enjoy millions of ebooks
        </h2>

        <button
          class="bg-[#1a202c] text-white font-bold rounded-lg px-8 py-3 hover:bg-black transition"
        >
          Sign up today
        </button>

        <p class="text-gray-700 text-xl">
          Still have questions?
          <a href="#" class="text-[#003366] underline font-semibold ml-2">Visit help and learning <span>></span></a>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.bg-bookshare-blue {
  background-color: #224892;
}

.hero-circle-image {
  /* Feather edges so image melts into background */
  box-shadow: 0 0 0 2px #224892;
  -webkit-mask-image: radial-gradient(circle at center, #000 63%, rgba(0, 0, 0, 0.65) 68%, transparent 74%);
  mask-image: radial-gradient(circle at center, #000 63%, rgba(0, 0, 0, 0.65) 68%, transparent 74%);
}
.bg-dark-navy {
  background-color: #001529;
}

.reader-section {
  background: #efefef;
  padding: 58px 0 64px;
}

.reader-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 0.95fr 1fr;
  gap: 22px;
  align-items: center;
}

.reader-left h2 {
  color: #143d8d;
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 24px;
  font-weight: 700;
}

.reader-left p {
  color: #222;
  font-size: 14px;
  line-height: 1.45;
  max-width: 430px;
}

.reader-left ul {
  margin: 26px 0 22px 14px;
  color: #222;
  font-size: 14px;
  line-height: 1.5;
  max-width: 460px;
}

.reader-link {
  display: inline-block;
  color: #143d8d;
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
  margin: 4px 0 28px;
}

.store-buttons {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  align-items: center;
}

.store-badge-link img {
  display: block;
  height: 50px;
  width: auto;
}

.reader-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.reader-right img {
  width: min(100%, 470px);
  height: auto;
  display: block;
}

@media (max-width: 1200px) {
  .reader-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .reader-right {
    justify-content: flex-start;
  }

  .reader-left h2 {
    font-size: 44px;
  }
}
</style>
