<template>
  <div class="bg-white font-sans">
    <header>
      <div class="bg-gray-100 py-1 px-10 text-right text-xs text-blue-900 border-b">
        <a href="#" class="hover:underline">Donate</a> |
        <span class="cursor-pointer">English <i class="fas fa-chevron-down ml-1"></i></span>
      </div>
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
  </div>
</template>

<style scoped>
.hero-sunburst {
  background-color: #0a3d91;
  background-image: repeating-conic-gradient(
    from -12deg at 68% -6%,
    rgba(14, 73, 168, 0.95) 0deg 10deg,
    rgba(10, 61, 145, 0.98) 10deg 20deg
  );
}
</style>
