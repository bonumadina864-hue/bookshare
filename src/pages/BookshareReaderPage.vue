<template>
  <div>
    <main class="bg-white">
      <section class="bg-[#0d3f96] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.09)_0,_rgba(255,255,255,0.01)_45%,_transparent_70%)]">
        <div class="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-14">
          <h1 class="text-[38px] font-bold leading-none text-white md:text-[52px]">Bookshare Reader</h1>
        </div>
      </section>

      <section class="bg-[#f7f8fa]">
        <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 md:items-center md:px-10 md:py-16">
          <article class="max-w-[520px]">
            <h2 class="text-[46px] font-bold leading-none text-[#111827]">Read with ease</h2>
            <p class="mt-8 text-[17px] leading-[1.55] text-[#1f2937]">
              Bookshare Reader is our free app that makes reading easy. Access millions of audiobooks and ebooks and
              customize your reading experience in ways that work for you.
            </p>
            <p class="mt-8 text-[21px] font-semibold leading-[1.45] text-[#111827]">
              Find a book and read online, or download it to a smartphone, tablet, or Alexa-enabled speaker today!
            </p>

            <div class="mt-9 flex flex-wrap items-center gap-4">
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/Apple-App-Store.png" alt="Download on the App Store badge" class="h-[52px] w-auto" />
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/google-play-badge.png" alt="Get it on Google Play badge" class="h-[52px] w-auto" />
              <img src="https://www.bookshare.org/wp-content/uploads/2024/01/amazon-alexa-button-2.png" alt="Download for Alexa badge" class="h-[52px] w-auto" />
            </div>
          </article>

          <div class="w-full max-w-[620px] md:justify-self-end">
            <div class="aspect-video overflow-hidden rounded-sm shadow-sm">
              <iframe
                class="h-full w-full"
                src="https://www.youtube.com/embed/0aWYuD1NgkE"
                title="Bookshare Reader video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white border-t border-[#eceff3]">
        <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-20">
          <figure class="w-full max-w-[540px]">
            <img
              src="https://www.bookshare.org/wp-content/uploads/2024/01/Featured-Books-with-gradient-behind-1024x465.png"
              alt="Featured Bookshare books with purple gradient background"
              class="w-full h-auto"
            />
          </figure>

          <article class="max-w-[560px]">
            <h2 class="text-[46px] font-bold leading-none text-[#111827]">Explore over a million titles</h2>
            <p class="mt-6 text-[17px] leading-[1.6] text-[#1f2937]">
              Discover over a million audiobooks and ebooks, including best sellers, new releases, educational books,
              textbooks, children's books, young adult titles, biographies, mysteries, freely-available public domain
              books, and more. Search the entire collection or see recommended titles directly in the app.
            </p>
          </article>
        </div>
      </section>

      <section class="bg-white">
        <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 pb-14 pt-24 md:grid-cols-2 md:items-center md:px-10 md:pb-20 md:pt-28">
          <article class="max-w-[560px]">
            <h2 class="text-[46px] font-bold leading-none text-[#111827]">Read where you want</h2>
            <p class="mt-6 text-[17px] leading-[1.6] text-[#1f2937]">
              Read Bookshare ebooks on web browsers, iOS and Android mobile devices, and Alexa-enabled smart speakers.
            </p>
          </article>

          <figure class="w-full max-w-[600px] md:justify-self-end">
            <img
              src="https://www.bookshare.org/wp-content/uploads/2024/03/Copy-of-Bookshare-Reader-Graphic-2-edited-1.png"
              alt="Bookshare Reader devices including laptop phone and smart speaker"
              class="w-full h-auto"
            />
          </figure>
        </div>
      </section>

      <section class="bg-white">
        <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 pb-14 pt-24 md:grid-cols-2 md:items-center md:px-10 md:pb-20 md:pt-28">
          <figure class="w-full max-w-[600px]">
            <img
              src="https://www.bookshare.org/wp-content/uploads/2024/02/Reader-on-iPad.png"
              alt="Bookshare Reader interface shown on iPad"
              class="w-full h-auto"
            />
          </figure>

          <article class="max-w-[560px]">
            <h2 class="text-[46px] font-bold leading-none text-[#111827]">Read how you want</h2>
            <p class="mt-6 text-[17px] leading-[1.6] text-[#1f2937]">
              Customize your experience in ways that work for you. Listen to books in audio, follow along with
              karaoke-style highlighting, enlarge text sizes, adjust reading speed, background, colors and more!
            </p>
          </article>
        </div>
      </section>

      <section class="bg-[#17469e]">
        <div class="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:px-10 md:py-14">
          <figure class="w-full max-w-[520px]">
            <img
              src="https://www.bookshare.org/wp-content/uploads/2024/02/east-asian-mother-toddler-device.jpg"
              alt="Mother and toddler reading together on a tablet"
              class="w-full h-auto rounded-[18px]"
            />
          </figure>

          <article class="max-w-[560px] text-white">
            <div class="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#17469e]">
              <i class="fa-solid fa-quote-left text-[18px]"></i>
            </div>

            <blockquote class="text-[28px] font-bold leading-[1.25]">
              This was a life changer for my dyslexic son. He's able to get a majority of his textbooks as ebooks to use
              with a text to voice app. He went from barely reading to now blowing through a book a week. He's been using
              it for 5 years and loves it.
            </blockquote>

            <p class="mt-6 text-[40px] leading-none">- Parent</p>
          </article>
        </div>
      </section>

      <section class="bg-white">
        <div class="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
          <h2 class="text-[46px] font-bold leading-none text-[#111827]">Feature Rich Reading</h2>
          <p class="mt-5 max-w-[980px] text-[16px] leading-[1.5] text-[#1f2937]">
            Access millions of titles directly from the Bookshare library, read on one device, and pick up from where
            you left off on another device. Learn about Bookshare Reader's features.
          </p>

          <div class="mt-5 overflow-x-auto border border-[#d7dce4] bg-white">
            <table class="min-w-full border-collapse text-left text-[14px] text-[#111827]">
              <thead>
                <tr class="bg-[#17469e] text-white">
                  <th class="border border-[#3a5f9f] px-4 py-3 font-semibold">Features</th>
                  <th class="border border-[#3a5f9f] px-4 py-3 font-semibold">Computer / Chromebook<br />Chrome, Edge, Safari, Firefox</th>
                  <th class="border border-[#3a5f9f] px-4 py-3 font-semibold">Smartphone<br />iOS, Android</th>
                  <th class="border border-[#3a5f9f] px-4 py-3 font-semibold">Alexa Smart Speaker</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in featureRows" :key="row.feature">
                  <td class="border border-[#e2e5ea] px-4 py-3">{{ row.feature }}</td>
                  <td class="border border-[#e2e5ea] px-4 py-3">{{ row.computer }}</td>
                  <td class="border border-[#e2e5ea] px-4 py-3">{{ row.phone }}</td>
                  <td class="border border-[#e2e5ea] px-4 py-3">{{ row.alexa }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="bg-[#e9edf5]">
        <div class="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
          <h2 class="text-center text-[56px] font-bold leading-none text-[#111827]">How to use Bookshare Reader</h2>

          <div class="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
            <a href="#" class="flex items-center gap-4 rounded-lg border-2 border-[#1e4f9b] bg-white px-5 py-5 text-[16px] text-[#111827]">
              <i class="fa-solid fa-laptop text-[20px] text-[#1e4f9b]"></i>
              <span>How do I use Bookshare Reader on a web browser?</span>
            </a>
            <a href="#" class="flex items-center gap-4 rounded-lg border-2 border-[#1e4f9b] bg-white px-5 py-5 text-[16px] text-[#111827]">
              <i class="fa-solid fa-mobile-screen-button text-[20px] text-[#1e4f9b]"></i>
              <span>How do I use Bookshare Reader on a mobile device?</span>
            </a>
            <a href="#" class="flex items-center gap-4 rounded-lg border-2 border-[#1e4f9b] bg-white px-5 py-5 text-[16px] text-[#111827]">
              <i class="fa-solid fa-volume-high text-[20px] text-[#1e4f9b]"></i>
              <span>How do I use Bookshare Reader for smart speaker?</span>
            </a>
          </div>

          <p class="mt-8 text-center text-[24px] text-[#111827]">
            Still have questions?
            <a href="#" class="font-semibold text-[#123f92] underline">Visit help and learning</a>
            <span class="text-[#123f92]">&gt;</span>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const featureRows = [
  { feature: "Listen to words read aloud", computer: "Yes", phone: "Yes", alexa: "Yes" },
  { feature: "See text on screen", computer: "Yes", phone: "Yes", alexa: "Yes" },
  { feature: "Navigate by page and chapter", computer: "Yes", phone: "Chapter only", alexa: "NA" },
  { feature: "Adjust reading speed", computer: "Yes", phone: "Yes", alexa: "Yes" },
  { feature: "Adjust font, color, background", computer: "Yes", phone: "Yes", alexa: "NA" },
  { feature: "Bookmarks", computer: "Yes", phone: "Beta", alexa: "NA" },
  { feature: "Remember last reading spot", computer: "Yes", phone: "Yes", alexa: "Yes" },
  { feature: "Read offline", computer: "NA", phone: "Yes", alexa: "NA" },
  { feature: "Read MathML", computer: "Yes", phone: "Coming soon", alexa: "NA" },
];

</script>

<style>
.bg-dark-navy {
  background-color: #001529;
}
</style>
