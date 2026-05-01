<template>
  <div class="min-h-screen bg-white font-sans">
    <MainHeader />

    <section
      class="relative isolate overflow-hidden bg-[#1a4696] py-16 md:py-20"
      style="background-image: url('https://www.bookshare.org/wp-content/uploads/2024/01/Page-Hero-Background.jpg'); background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 bg-[#1a4696]/45"></div>
      <div class="relative mx-auto max-w-6xl px-6">
        <h1 class="text-6xl font-bold leading-none text-white md:text-7xl">Global</h1>
      </div>
    </section>

    <section class="bg-[#eef0f3] py-16 md:py-20">
      <div class="mx-auto grid max-w-[1312px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <h2 class="max-w-[760px] text-4xl font-extrabold leading-[1.04] tracking-[-0.2px] text-[#1a4696] md:text-[50px]">
            <span class="block whitespace-nowrap">Inclusive learning and</span>
            <span class="block">education</span>
          </h2>
          <p class="mt-8 max-w-[560px] text-lg leading-[1.48] text-[#1f2937] md:text-[17px]">
            Bookshare supports learners with reading barriers around the world by enhancing access to information and technology.
            Learners can join as individual members and gain access to the world's largest collection of audiobooks and ebooks in
            easy-to-read formats. In addition, we help learners get access to content in local languages to pursue education and
            future employment readiness. We organize training and support for educators, parents, and other stakeholders. We have
            national partnerships in Africa and South Asia, including India, Bangladesh, Nepal, Sri Lanka, the Philippines, and Kenya.
          </p>
          <a
            href="https://bookshare.org/sign-up-outside-the-us/"
            class="mt-8 inline-block rounded-[10px] bg-[#121a26] px-7 py-3 text-lg font-semibold text-white transition hover:opacity-90"
          >
            Sign up
          </a>
        </div>

        <div class="lg:pl-1">
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/02/International-India-blind-student-using-Bookshare-on-phone-1024x682.jpg"
            alt="Student using Bookshare on phone"
            class="w-full rounded-[18px] object-cover shadow-sm"
          />
        </div>
      </div>
    </section>

    <section class="bg-white px-6 pb-20 pt-6 [font-family:Inter,sans-serif] md:pb-24 md:pt-10">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-20 text-center text-4xl font-bold leading-tight text-[#1a4696] md:text-[40px]">
          Bringing digital literacy to the global stage
        </h2>

        <div class="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3">
          <article>
            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-[#1a4696] text-white">
              <i class="fas fa-language text-base"></i>
            </div>
            <h3 class="mt-4 text-xl font-bold text-[#111827]">Text in local languages</h3>
            <p class="mt-2 text-base leading-relaxed text-[#4b5563]">
              Access high-interest content in local languages, including content in over 40 languages
            </p>
          </article>

          <article>
            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-[#1a4696] text-white">
              <i class="fas fa-sliders-h text-base"></i>
            </div>
            <h3 class="mt-4 text-xl font-bold text-[#111827]">Customize learning</h3>
            <p class="mt-2 text-base leading-relaxed text-[#4b5563]">
              Customize the reading experience by adjusting voices, reading speed, highlighting, colors, text size, and more
            </p>
          </article>

          <article>
            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-[#1a4696] text-white">
              <i class="fas fa-arrow-up text-base"></i>
            </div>
            <h3 class="mt-4 text-xl font-bold text-[#111827]">Learn more, struggle less</h3>
            <p class="mt-2 text-base leading-relaxed text-[#4b5563]">
              Focus on learning, rather than trying to see small text, or searching for books in braille or other formats
            </p>
          </article>

          <article>
            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-[#1a4696] text-white">
              <i class="fas fa-expand-arrows-alt text-base"></i>
            </div>
            <h3 class="mt-4 text-xl font-bold text-[#111827]">Close learning gaps</h3>
            <p class="mt-2 text-base leading-relaxed text-[#4b5563]">
              Build reading proficiency and confidence that helps them to perform better in class and accelerate learning
            </p>
          </article>

          <article>
            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-[#1a4696] text-white">
              <i class="far fa-smile text-base"></i>
            </div>
            <h3 class="mt-4 text-xl font-bold text-[#111827]">Build independence</h3>
            <p class="mt-2 text-base leading-relaxed text-[#4b5563]">
              Students can read on their own immediately with Bookshare's assistive features, helping them build independence
            </p>
          </article>

          <article>
            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-[#1a4696] text-white">
              <i class="fas fa-graduation-cap text-base"></i>
            </div>
            <h3 class="mt-4 text-xl font-bold text-[#111827]">Learn for a lifetime</h3>
            <p class="mt-2 text-base leading-relaxed text-[#4b5563]">
              Students can take Bookshare with them through school, work, and adulthood to enjoy reading and learning for a lifetime
            </p>
          </article>
        </div>

        <div class="mt-16 text-center">
          <a
            href="https://bookshare.org/sign-up-outside-the-us/"
            class="text-lg font-semibold text-[#1a4696] underline underline-offset-2 transition hover:opacity-80"
          >
            Sign up today >
          </a>
        </div>
      </div>
    </section>

    <section class="bg-[#1a4696] px-6 py-20 [font-family:Inter,sans-serif]">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/02/International-Africa-Three-children-using-tablet.jpg"
            alt="Children using tablet"
            class="aspect-[4/3] w-full rounded-[40px] object-cover"
          />
        </div>

        <div>
          <div class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-xl font-extrabold leading-none text-[#1a4696]">
            “
          </div>
          <p class="mt-6 text-xl leading-relaxed text-white md:text-2xl">
            By equipping the schools with the technology and training that they need to provide a digital-first experience,
            students not only get a quality education but also gain the digital literacy skills that are vital for employment and
            independent participation in society.
          </p>
          <a
            href="#"
            class="mt-8 inline-block text-base font-semibold text-white underline underline-offset-2 transition hover:opacity-85"
          >
            Read more about our global work >
          </a>
        </div>
      </div>
    </section>

    <section class="bg-[#eef0f3] px-6 py-20 [font-family:Inter,sans-serif]">
      <div class="mx-auto max-w-4xl">
        <h2 class="mb-12 text-center text-4xl font-bold text-[#1a4696]">Frequently asked questions</h2>

        <div class="space-y-6">
          <article v-for="item in faqItems" :key="item.id" class="overflow-hidden">
            <button
              type="button"
              class="flex w-full items-center justify-between rounded-md bg-[#1a4696] p-5 text-left text-lg font-bold text-white shadow-xl"
              :class="isOpen(item.id) ? 'rounded-b-none rounded-t-md' : 'rounded-md'"
              @click="toggleFaq(item.id)"
            >
              <span>{{ item.question }}</span>
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-sm font-extrabold leading-none text-[#1a4696]">
                {{ isOpen(item.id) ? "−" : "+" }}
              </span>
            </button>

            <div
              class="grid overflow-hidden transition-all duration-300 ease-in-out"
              :class="isOpen(item.id) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
            >
              <div class="min-h-0 rounded-b-md border-2 border-t-0 border-[#1a4696] bg-white p-6 text-base leading-relaxed text-[#333]">
                <p v-html="item.answer"></p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="relative isolate overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat px-4 py-10 sm:py-14 [font-family:Inter,sans-serif]"
      style="background-image: url('https://www.bookshare.org/wp-content/uploads/2024/01/Sign-Up-CTA-Section-Desktop.webp')"
    >
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <div class="mx-auto w-full max-w-[840px] rounded-[26px] bg-[#f2f2f2] px-6 py-10 text-center shadow-2xl sm:px-10 sm:py-14">
        <h2 class="mx-auto max-w-[760px] text-4xl font-bold leading-[1.08] text-[#1a4696] sm:text-5xl md:text-6xl">
          Join Bookshare and enjoy millions of ebooks
        </h2>

        <a
          href="#"
          class="mt-8 inline-block rounded-xl bg-[#121a26] px-8 py-3 text-base font-semibold text-white transition duration-300 hover:opacity-90 sm:text-lg"
        >
          Sign up today
        </a>

        <p class="mt-8 text-lg text-[#111827] sm:text-2xl">
          Still have questions?
          <a href="#" class="ml-2 font-semibold text-[#1a4696] underline underline-offset-2">
            Visit help and learning <span aria-hidden="true">›</span>
          </a>
        </p>
      </div>
    </section>

    <footer class="bg-[#0a327d] text-white py-16 px-8 font-sans">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div>
            <h4 class="uppercase font-bold text-lg mb-4">About</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="underline">Who we are</a></li>
              <li><a href="#" class="underline">Careers</a></li>
              <li><a href="#" class="underline">Events</a></li>
              <li><a href="#" class="underline">Media Kit</a></li>
            </ul>
          </div>
          <div>
            <h4 class="uppercase font-bold text-lg mb-4">Get Involved</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="underline">Donate</a></li>
              <li><a href="#" class="underline">Partner with us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="uppercase font-bold text-lg mb-4">Help</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="underline">Help and learning center</a></li>
              <li><a href="#" class="underline">Contact us</a></li>
              <li><a href="#" class="underline">Site map</a></li>
            </ul>
          </div>
          <div>
            <h4 class="uppercase font-bold text-lg mb-4">Legal</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="underline">Legal</a></li>
              <li><a href="#" class="underline">Privacy</a></li>
              <li><a href="#" class="underline">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 class="uppercase font-bold text-lg mb-4">Follow Us</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="underline">Our blog</a></li>
              <li><a href="#" class="underline">Facebook</a></li>
              <li><a href="#" class="underline">Instagram</a></li>
              <li><a href="#" class="underline">X</a></li>
              <li><a href="#" class="underline">Youtube</a></li>
            </ul>
          </div>
          <div>
            <h4 class="uppercase font-bold text-lg mb-4">Download App</h4>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="underline">Apple/iOS</a></li>
              <li><a href="#" class="underline">Google/Android</a></li>
              <li><a href="#" class="underline">Amazon Alexa</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/30 mt-14 pt-8">
          <div class="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div class="shrink-0">
              <img
                src="https://www.bookshare.org/wp-content/uploads/2024/04/White_BKS_Logo_2023.png"
                alt="Bookshare logo"
                class="h-10 w-auto"
              />
            </div>
            <div class="text-[11px] leading-relaxed text-white/95 max-w-4xl">
              <p>
                This project is supported by the U.S. Department of Education, Office of Special Education Programs (Award
                Number H327D220002). Opinions expressed herein are those of the authors and do not necessarily represent the
                position of the U.S. Department of Education.
              </p>
              <p class="mt-3">
                Bookshare® and Benetech® are registered trademarks of Beneficent Technology, Inc. © Copyright 2026,
                Beneficent Technology, Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainHeader from "../components/MainHeader.vue";

const openIds = ref([]);

const faqItems = [
  {
    id: 1,
    question: "Who is eligible for Bookshare?",
    answer:
      "Bookshare is for students and adults around the world who find it difficult to process or comprehend printed words, see text in books or on a screen, or physically manage books or reading devices. To access our copyright library, members must have a qualifying print disability. <a href='#' class='text-[#1a4696] underline'>Learn about qualifications</a>.",
  },
  {
    id: 2,
    question: "How many books are available in my country?",
    answer:
      "Bookshare is able to provide books to readers around the world because publishers have given rights to distribute globally. Over 440,000 titles are currently available to Bookshare members around the world. Additional books converted by Bookshare or contributed by volunteers may be available to countries that have ratified the Marrakesh Treaty. <a href='#' class='text-[#1a4696] underline'>Explore the library</a>.",
  },
  {
    id: 3,
    question: "How much does it cost in my country?",
    answer:
      "Membership costs are based upon World Bank designation of countries as high-income, upper-middle income, lower-middle income or lower-income. All fees listed below are in US Dollars (USD).<br>Upper-income country: $79.99 USD/year<br>Middle-income country: $30.00 USD/year<br>Low-income country: Free",
  },
  {
    id: 4,
    question: "How can I sign up in my country?",
    answer:
      "To sign up outside the US, <a href='https://bookshare.org/sign-up-outside-the-us/' class='text-[#1a4696] underline'>go to the global signup page</a>. If you are from a low-income country and need assistance signing up for Bookshare, visit this <a href='#' class='text-[#1a4696] underline'>help article to contact our support team</a>.",
  },
  {
    id: 5,
    question: "Do you provide customer support to members outside the US?",
    answer:
      "Yes! To get support in Asian and Africa, <a href='#' class='text-[#1a4696] underline'>see our helpline and email options</a>. For support in all other countries, contact us via our <a href='#' class='text-[#1a4696] underline'>online support page</a>.",
  },
];

const toggleFaq = (id) => {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter((item) => item !== id);
    return;
  }
  openIds.value = [...openIds.value, id];
};

const isOpen = (id) => openIds.value.includes(id);
</script>
