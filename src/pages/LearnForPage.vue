<template>
  <div class="bg-white font-sans">
    <header>
      <TopUtilityBar />
      <nav class="bg-white py-4 px-10 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div class="flex items-center space-x-10">
          <div class="text-2xl font-bold text-blue-900 flex items-center">
            <router-link to="/"><img src="https://www.bookshare.org/images/logo_.png" alt="" /></router-link>
          </div>
          <div class="hidden lg:flex space-x-6 font-semibold text-gray-700">
            <a href="#" class="hover:text-blue-800">What is Bookshare? <i class="fas fa-chevron-down text-[10px]"></i></a>
            <a href="#" class="hover:text-blue-800">Who is Bookshare for? <i class="fas fa-chevron-down text-[10px]"></i></a>
            <a href="#" class="hover:text-blue-800">Explore our library</a>
          </div>
        </div>
        <div class="flex items-center space-x-6">
          <router-link to="/login" class="font-bold flex items-center text-gray-800 hover:text-blue-800">
            <i class="far fa-user-circle text-2xl mr-2"></i> Log in
          </router-link>
          <router-link to="/signup" class="bg-[#111d30] text-white px-6 py-2 rounded-md font-bold hover:bg-black transition">Sign up</router-link>
        </div>
      </nav>
    </header>

    <section class="hero-sunburst text-white">
      <div class="max-w-7xl mx-auto py-24 px-12">
        <h1 class="text-[64px] font-bold leading-none">Parents and students</h1>
      </div>
    </section>

    <section class="bg-[#f1f2f5]">
      <div class="max-w-7xl mx-auto py-16 px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-[#003366] text-[56px] font-bold leading-[1.05] mb-8">
            From struggling to<br />
            thriving learners
          </h2>
          <p class="text-[#2f3845] text-[16px] leading-[1.5] mb-8 max-w-[560px]">
            Bookshare® audiobooks and ebooks are transformative. They make it easier
            for students with learning disabilities to read with powerful assistive
            reading features. Students can listen to books, follow with word-level
            highlighting, read in large text or braille, and customize their reading
            experience to learn in ways that work for them.
          </p>
          <button class="bg-[#16263d] text-white rounded-[12px] px-10 py-4 text-[24px] font-bold leading-none hover:bg-[#0f1c2e] transition">
            Sign up for FREE
          </button>
        </div>

        <div>
          <iframe
            class="w-full h-[300px] rounded-xl"
            src="https://www.youtube.com/embed/U7GurO03VlQ?start=8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="bg-[#f1f2f5] py-16">
      <div class="max-w-7xl mx-auto px-10">
        <h2 class="text-[#14448d] text-[56px] font-bold text-center leading-tight mb-16">Ignite your child's learning</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 text-left">
          <div>
            <div class="w-10 h-10 rounded-md bg-[#0b4aa2] text-white flex items-center justify-center mb-4">
              <i class="fas fa-sliders-h text-[17px]"></i>
            </div>
            <h3 class="text-[23px] font-bold leading-tight text-[#111827] mb-2">Make reading easier</h3>
            <p class="text-[#303848] text-[14px] leading-[1.45]">Customize audio, word highlighting, text size, colors, and more to fit your child's learning style</p>
          </div>

          <div>
            <div class="w-10 h-10 rounded-md bg-[#0b4aa2] text-white flex items-center justify-center mb-4">
              <i class="fas fa-music text-[17px]"></i>
            </div>
            <h3 class="text-[23px] font-bold leading-tight text-[#111827] mb-2">Learn more, struggle less</h3>
            <p class="text-[#303848] text-[14px] leading-[1.45]">Spend less time struggling to read or to decode, and focus on comprehension and learning</p>
          </div>

          <div>
            <div class="w-10 h-10 rounded-md bg-[#0b4aa2] text-white flex items-center justify-center mb-4">
              <i class="far fa-smile text-[17px]"></i>
            </div>
            <h3 class="text-[23px] font-bold leading-tight text-[#111827] mb-2">Build confidence</h3>
            <p class="text-[#303848] text-[14px] leading-[1.45]">Build not only literacy skills, but also belief in ones self</p>
          </div>

          <div>
            <div class="w-10 h-10 rounded-md bg-[#0b4aa2] text-white flex items-center justify-center mb-4">
              <i class="fas fa-heart text-[17px]"></i>
            </div>
            <h3 class="text-[23px] font-bold leading-tight text-[#111827] mb-2">Discover passions</h3>
            <p class="text-[#303848] text-[14px] leading-[1.45]">Deep dive on topics they love and discover new ones with access to a huge library</p>
          </div>

          <div>
            <div class="w-10 h-10 rounded-md bg-[#0b4aa2] text-white flex items-center justify-center mb-4">
              <i class="fas fa-graduation-cap text-[17px]"></i>
            </div>
            <h3 class="text-[23px] font-bold leading-tight text-[#111827] mb-2">Learn for a lifetime</h3>
            <p class="text-[#303848] text-[14px] leading-[1.45]">From elementary to high school, college, and beyond, learn through all phases of life</p>
          </div>

          <div>
            <div class="w-10 h-10 rounded-md bg-[#0b4aa2] text-white flex items-center justify-center mb-4">
              <i class="fas fa-dollar-sign text-[17px]"></i>
            </div>
            <h3 class="text-[23px] font-bold leading-tight text-[#111827] mb-2">100% FREE</h3>
            <p class="text-[#303848] text-[14px] leading-[1.45]">US students with qualifying disabilities join for free through an award from the Office of Special Education Programs</p>
          </div>
        </div>

        <div class="text-center mt-14">
          <a href="#" class="text-[#004494] text-[27px] font-semibold underline inline-flex items-center gap-2">
            Sign up for FREE today <span>></span>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-[#163a7a] py-20 px-6">
      <div class="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] items-start gap-10 md:gap-14">
        <div class="flex justify-center md:justify-start w-full">
          <img
            src="/@fs/C:/Users/user/.cursor/projects/c-Users-user-Desktop-m/assets/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_6035114efe2d8d42ee0890befccff935_images_image-24877b2d-c9b5-470a-811d-b0450cffda83.png"
            alt="Lily testimonial"
            class="w-[290px] h-[220px] rounded-[14px] object-cover"
          />
        </div>

        <div class="text-white text-left w-full pt-1 md:pt-0">
          <div class="inline-flex w-8 h-8 rounded-[6px] bg-white text-[#163a7a] items-center justify-center text-[20px] font-bold mb-5">
            "
          </div>
          <p class="text-[22px] leading-[1.28] max-w-[640px] mb-8">
            Lily can download a book on her own. She navigates the ebook and sets
            her own preferences, such as font size, font color, and rate of speech.
            I feel relief. For two years, we struggled for her to read a simple
            sentence, and now she reads comprehensively.
          </p>
          <a href="#" class="inline-flex items-center gap-2 text-[15px] md:text-[15px] leading-none font-semibold underline">
            Read Lily's story <span>></span>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-[#1a4a9e] text-4xl font-bold text-center mb-12">Frequently asked questions</h2>

        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="mb-6"
        >
          <button
            type="button"
            class="w-full bg-[#1a4a9e] text-white px-6 py-5 text-left border-2 border-[#1a4a9e] flex items-center justify-between transition-colors"
            :class="isOpen(faq.id) ? 'rounded-t-lg rounded-b-none' : 'rounded-lg'"
            @click="toggleFaq(faq.id)"
          >
            <span class="font-bold text-[26px] leading-tight">{{ faq.question }}</span>
            <span class="w-7 h-7 rounded-full bg-white text-[#1a4a9e] flex items-center justify-center text-lg font-bold shrink-0 ml-4">
              {{ isOpen(faq.id) ? '-' : '+' }}
            </span>
          </button>

          <transition name="faq-slide">
            <div
              v-if="isOpen(faq.id)"
              class="border-2 border-[#1a4a9e] border-t-0 rounded-b-lg bg-white px-6 py-6"
            >
              <p class="text-black text-[16px] leading-8">
                <template v-for="(part, index) in faq.parts" :key="`${faq.id}-${index}`">
                  <a
                    v-if="part.type === 'link'"
                    :href="part.href"
                    class="text-blue-600 underline"
                  >
                    {{ part.text }}
                  </a>
                  <span v-else>{{ part.text }}</span>
                </template>
              </p>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-br from-[#802080] via-[#501060] to-[#201040] py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-white text-4xl font-bold text-center mb-10">
          Explore books for K-12 students
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <article v-for="book in k12Books" :key="book.label" class="overflow-hidden">
            <div class="aspect-[2/3] rounded-t-xl overflow-hidden bg-gray-400">
              <img :src="book.image" :alt="book.label" class="w-full h-full object-cover" />
            </div>
            <p class="bg-white text-black text-sm font-semibold p-3 rounded-b-xl leading-tight min-h-[64px] flex items-center">
              {{ book.label }}
            </p>
          </article>
        </div>

        <div class="text-center mt-8">
          <a href="#" class="inline-flex items-center gap-2 bg-[#1a365d] text-white border border-white rounded-md px-7 py-3 font-bold">
            Explore full library <span aria-hidden="true">-></span>
          </a>
        </div>
      </div>
    </section>

    <section class="relative py-20 px-6 bg-cover bg-center bg-fixed" style="background-image: url('https://www.bookshare.org/wp-content/uploads/2024/01/Sign-Up-CTA-Section-Desktop.webp');">
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="relative max-w-3xl mx-auto bg-white rounded-[40px] px-8 py-10 text-center">
        <h2 class="text-[#123e86] text-5xl font-extrabold leading-tight mb-6">
          Join Bookshare and
          <br />
          enjoy millions of ebooks
        </h2>
        <button class="bg-[#0f223d] text-white font-bold px-8 py-3 rounded-lg mb-6">
          Sign up today
        </button>
        <p class="text-slate-700 text-lg">
          Still have questions?
          <a href="#" class="text-[#1f4d8e] underline font-semibold ml-2">Visit help and learning ></a>
        </p>
      </div>
    </section>

    <footer class="bg-[#123f8d] text-white">
      <div class="mx-auto w-full max-w-[1240px] px-8 py-16">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8">
          <div class="space-y-3">
            <h4 class="uppercase font-bold text-lg">ABOUT</h4>
            <a href="#" class="block underline text-sm">Who we are</a>
            <a href="#" class="block underline text-sm">Careers</a>
            <a href="#" class="block underline text-sm">Events</a>
            <a href="#" class="block underline text-sm">Media Kit</a>
          </div>

          <div class="space-y-3">
            <h4 class="uppercase font-bold text-lg">GET INVOLVED</h4>
            <a href="#" class="block underline text-sm">Donate</a>
            <a href="#" class="block underline text-sm">Partner with us</a>
          </div>

          <div class="space-y-3">
            <h4 class="uppercase font-bold text-lg">HELP</h4>
            <a href="#" class="block underline text-sm">Help and learning center</a>
            <a href="#" class="block underline text-sm">Contact us</a>
            <a href="#" class="block underline text-sm">Site map</a>
          </div>

          <div class="space-y-3">
            <h4 class="uppercase font-bold text-lg">LEGAL</h4>
            <a href="#" class="block underline text-sm">Legal</a>
            <a href="#" class="block underline text-sm">Privacy</a>
            <a href="#" class="block underline text-sm">Accessibility</a>
          </div>

          <div class="space-y-3">
            <h4 class="uppercase font-bold text-lg">FOLLOW US</h4>
            <a href="#" class="block underline text-sm">Our blog</a>
            <a href="#" class="block underline text-sm">Facebook</a>
            <a href="#" class="block underline text-sm">Instagram</a>
            <a href="#" class="block underline text-sm">X</a>
            <a href="#" class="block underline text-sm">Youtube</a>
          </div>

          <div class="space-y-3">
            <h4 class="uppercase font-bold text-lg">DOWNLOAD APP</h4>
            <a href="#" class="block underline text-sm">Apple/iOS</a>
            <a href="#" class="block underline text-sm">Google/Android</a>
            <a href="#" class="block underline text-sm">Amazon Alexa</a>
          </div>
        </div>

        <div class="my-10 border-t border-white/35"></div>

        <div class="flex flex-col md:flex-row items-start gap-8 md:gap-10">
          <img
            src="https://www.bookshare.org/wp-content/uploads/2024/04/White_BKS_Logo_2023.png"
            alt="Bookshare logo"
            class="h-10 w-auto"
          />
          <div class="max-w-[760px] text-[11px] leading-5 text-white/90">
            <p>
              This project is supported by the U.S. Department of Education, Office of Special Education Programs (Award Number H327D220002).
              Opinions expressed herein are those of the authors and do not necessarily represent the position of the U.S. Department of Education.
            </p>
            <p class="mt-3">
              Bookshare and Benetech are registered trademarks of Beneficent Technology, Inc. Copyright 2026, Beneficent Technology, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopUtilityBar from "../components/TopUtilityBar.vue";
import kitob1 from '../img/kitob1.png'
import kitob2 from '../img/kitob2.png'
import kitob3 from '../img/kitob3.png'
import kitob4 from '../img/kitob4.png'
import kitob5 from '../img/kitob5.png'
import kitob6 from '../img/kitob6.png'

const openFaqs = ref([1, 2, 3])

const faqs = [
  {
    id: 1,
    question: 'Who can join Bookshare?',
    parts: [
      { type: 'text', text: 'Bookshare is for students who find it difficult to process or comprehend printed words, see text in books or on a screen, or physically manage books or reading devices. To access our copyright library, students must have a qualifying disability. ' },
      { type: 'link', text: 'Learn about qualifications.', href: '#' }
    ]
  },
  {
    id: 2,
    question: 'How much does it cost?',
    parts: [
      { type: 'text', text: 'Bookshare is FREE for qualified U.S. students in Pre-K to 12th grade, post-secondary, graduate, vocational, and continuing education classes through an award from the Office of Special Education Programs (OSEP), US Department of Education.' }
    ]
  },
  {
    id: 3,
    question: 'What books are available to students?',
    parts: [
      { type: 'text', text: 'Bookshare has books for every age and grade level of student. We have books for school, including textbooks and educational materials, new releases and popular series for children, middle school, teens, and young adult, as well as state-side curriculum, college course-level materials, and career resources. ' },
      { type: 'link', text: 'Learn about the library.', href: '#' }
    ]
  },
  {
    id: 4,
    question: 'How do you read Bookshare books?',
    parts: [
      { type: 'text', text: 'Bookshare books can be read in many ways. Students can listen with high-quality text-to-speech voices, follow highlighted text, read with refreshable braille, and customize fonts, colors, and reading speed in compatible tools. ' },
      { type: 'link', text: 'Learn about reading tools.', href: '#' }
    ]
  }
]

const toggleFaq = (id) => {
  if (openFaqs.value.includes(id)) {
    openFaqs.value = openFaqs.value.filter((item) => item !== id)
    return
  }

  openFaqs.value = [...openFaqs.value, id]
}

const isOpen = (id) => openFaqs.value.includes(id)

const k12Books = [
  { label: 'Newbery Award Winners', image: kitob1 },
  { label: 'Animals', image: kitob2 },
  { label: 'Books in Spanish', image: kitob3 },
  { label: 'Accelerated Reader Middl...', image: kitob4 },
  { label: "Young Reader's...", image: kitob5 },
  { label: 'High Interest Young Adult', image: kitob6 }
]
</script>

<style scoped>
.hero-sunburst {
  background-color: #0a3d91;
  background-image: repeating-conic-gradient(
    from -12deg at 68% -6%,
    rgba(14, 73, 168, 0.95) 0deg 10deg,
    rgba(10, 61, 145, 0.98) 10deg 20deg
  );
}

.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-slide-enter-from,
.faq-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

.faq-slide-enter-to,
.faq-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 420px;
}
</style>
