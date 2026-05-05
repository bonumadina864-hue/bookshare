<template>
  <div class="bg-white hes-page">
    <main>
      <section class="hero-section">
        <div class="container">
          <h1>Higher education students</h1>
        </div>
      </section>

      <section class="thrive-section">
        <div class="container thrive-grid">
          <article class="thrive-copy">
            <h2>Thrive in college and beyond</h2>
            <p>
              Bookshare® is essential for college students with learning disabilities. Students can find
              their course books in accessible formats in one place and read with powerful tools that make
              learning easier. They can listen to books in audio, follow along with karaoke-style
              highlighting, enlarge text sizes, read in braille, and adjust other settings to suit
              individual learning styles. Bookshare is free for all US college and graduate students with
              qualifying disabilities.
            </p>
            <a href="#" class="cta-btn">Sign up for FREE</a>
          </article>

          <div class="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/r4UxzLHA39E"
              title="Bookshare Helps A&M Student Dream Big"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section class="features-section">
        <div class="container features-container">
          <h2>Read and learn easier</h2>
          <div class="features-grid">
            <article class="feature-card">
              <div class="icon-box"><i class="fas fa-book-open"></i></div>
              <h3>Find your course books</h3>
              <p>Find the books you need in alternative formats like audio, audio + highlighted text, large text, and braille</p>
            </article>
            <article class="feature-card">
              <div class="icon-box"><i class="fas fa-sliders-h"></i></div>
              <h3>Make reading easier</h3>
              <p>Customize audio, word highlighting, text size, colors, and more to fit your individual learning style</p>
            </article>
            <article class="feature-card">
              <div class="icon-box"><i class="fas fa-arrow-up"></i></div>
              <h3>Focus on learning</h3>
              <p>Increase your comprehension of learning materials with assistive features that make reading easier</p>
            </article>
            <article class="feature-card">
              <div class="icon-box"><i class="fas fa-stopwatch"></i></div>
              <h3>Save time</h3>
              <p>Learn faster with books and reading tools that remove the barriers that make reading hard</p>
            </article>
            <article class="feature-card">
              <div class="icon-box"><i class="far fa-smile"></i></div>
              <h3>Build independence</h3>
              <p>Build not only literacy skills, but also confidence in your ability to learn on your own</p>
            </article>
            <article class="feature-card">
              <div class="icon-box"><i class="fas fa-dollar-sign"></i></div>
              <h3>100% FREE</h3>
              <p>US students with qualifying learning disabilities join for free through an award from the Office of Special Education Programs</p>
            </article>
          </div>
          <p class="features-cta"><a href="#">Sign Up for FREE today <i class="fas fa-chevron-right"></i></a></p>
        </div>
      </section>

      <section class="testimonial-section">
        <div class="container testimonial-grid">
          <div class="testimonial-image">
            <img src="/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-boookshare/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_924acba6fb5f966a6ba633c59207f57f_images_image-327905d1-a774-4875-9217-5068dd937582.png" alt="Student testimonial" />
          </div>
          <article class="testimonial-copy">
            <span class="quote-mark">“</span>
            <p>
              With a learning disability, it was so hard for me to read. It took me years to admit that to
              myself, and I was a senior in college before I sought help. I almost failed college because I
              couldn't read well and hated to lie about my reading. Fortunately, my academic advisor told me
              about Bookshare, a reading app that made it possible for me to graduate.
            </p>
            <a href="#">Read Justin's story <i class="fas fa-chevron-right"></i></a>
          </article>
        </div>
      </section>

      <section class="faq-section">
        <div class="container faq-wrap">
          <h2>Frequently asked questions</h2>
          <div v-for="item in faqItems" :key="item.id" class="faq-item">
            <button type="button" class="faq-question" @click="toggleFaq(item.id)">
              <span>{{ item.question }}</span>
              <span class="faq-toggle">{{ isOpen(item.id) ? "−" : "+" }}</span>
            </button>
            <div v-if="isOpen(item.id)" class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-gradient-to-r from-[#8a2387] to-[#1a4696] px-4 py-16 md:py-20 [font-family:Inter,sans-serif]">
        <div class="mx-auto max-w-7xl text-center">
          <h2 class="mb-10 text-3xl font-bold text-white sm:mb-12 md:text-[44px]">Explore books for higher ed</h2>

          <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            <article class="mx-auto w-full max-w-[190px] overflow-hidden rounded-lg bg-white shadow-2xl transition duration-300 hover:-translate-y-2">
              <img
                src="/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-boookshare/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_924acba6fb5f966a6ba633c59207f57f_images_image-fafd055c-c6e0-461f-b27e-596e7de07e2f.png"
                alt="Native Son"
                class="aspect-[2/3] w-full rounded-t-lg object-cover"
              />
              <p class="p-3 text-left text-sm font-semibold leading-5 text-[#1a4696] sm:text-base">College Board's 100...</p>
            </article>
            <article class="mx-auto w-full max-w-[190px] overflow-hidden rounded-lg bg-white shadow-2xl transition duration-300 hover:-translate-y-2">
              <img
                src="/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-boookshare/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_924acba6fb5f966a6ba633c59207f57f_images_image-ceeb7791-fe21-41a2-9c1d-ce8a6e68ce5d.png"
                alt="Applying to College"
                class="aspect-[2/3] w-full rounded-t-lg object-cover"
              />
              <p class="p-3 text-left text-sm font-semibold leading-5 text-[#1a4696] sm:text-base">Applying to College</p>
            </article>
            <article class="mx-auto w-full max-w-[190px] overflow-hidden rounded-lg bg-white shadow-2xl transition duration-300 hover:-translate-y-2">
              <img
                src="/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-boookshare/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_924acba6fb5f966a6ba633c59207f57f_images_image-f0eeef6e-40b0-4105-8808-faeef35d4477.png"
                alt="Write a Term Paper"
                class="aspect-[2/3] w-full rounded-t-lg object-cover"
              />
              <p class="p-3 text-left text-sm font-semibold leading-5 text-[#1a4696] sm:text-base">Student Resources</p>
            </article>
            <article class="mx-auto w-full max-w-[190px] overflow-hidden rounded-lg bg-white shadow-2xl transition duration-300 hover:-translate-y-2">
              <img
                src="/@fs/C:/Users/MadinaBonu/.cursor/projects/c-Users-MadinaBonu-Desktop-boookshare/assets/c__Users_MadinaBonu_AppData_Roaming_Cursor_User_workspaceStorage_924acba6fb5f966a6ba633c59207f57f_images_image-7a9e0f1a-a725-4eca-9328-e61c3f9865e6.png"
                alt="The Naked Roommate"
                class="aspect-[2/3] w-full rounded-t-lg object-cover"
              />
              <p class="p-3 text-left text-sm font-semibold leading-5 text-[#1a4696] sm:text-base">Transitioning to College</p>
            </article>
          </div>

          <a
            href="#"
            class="mt-10 inline-flex items-center gap-2 rounded-md border-2 border-white bg-[#0d3b66] px-6 py-2 text-white transition duration-300 hover:opacity-90 sm:mt-12"
          >
            Explore full library <span aria-hidden="true">→</span>
          </a>
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
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openIds = ref([]);

const faqItems = [
  {
    id: 1,
    question: "Who can join Bookshare?",
    answer:
      "Bookshare is for people who find it difficult to process or comprehend printed words, see text in books or on a screen, or physically manage books or reading devices.",
  },
  {
    id: 2,
    question: "How much does it cost?",
    answer:
      "Bookshare is FREE for qualified U.S. students in pre-K to 12th grade, post-secondary, graduate, vocational, and continuing education classes through an award from the Office of Special Education Programs (OSEP), US Department of Education.",
  },
  {
    id: 3,
    question: "What books are available for students in Higher Ed?",
    answer:
      "Bookshare has books for every age and grade level, including college-level textbooks, in formats that make reading easier for students.",
  },
  {
    id: 4,
    question: "How do students read Bookshare books?",
    answer:
      "You can read Bookshare ebooks on computers, Chromebooks, smartphones, tablets, braille devices, and other assistive technology devices.",
  },
  {
    id: 5,
    question: "How can I learn more about Bookshare for Higher Ed?",
    answer: "Visit our learning article for Higher Ed students.",
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

<style src="../styles/higher-education-students.css"></style>
