<template>
  <div class="bg-[#f9fafb]">
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <TopUtilityBar />
      <nav class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-10">
          <router-link to="/" class="flex items-center">
            <img src="https://www.bookshare.org/images/logo_.png" alt="Bookshare" class="h-20" />
          </router-link>
          <div class="hidden lg:flex space-x-8 text-[15px] font-semibold text-gray-700">
            <a href="#" class="hover:text-blue-800">What is Bookshare? <i class="fas fa-chevron-down text-[10px] ml-1"></i></a>
            <a href="#" class="hover:text-blue-800">Who is Bookshare for? <i class="fas fa-chevron-down text-[10px] ml-1"></i></a>
            <a href="#" class="hover:text-blue-800">Explore our library</a>
          </div>
        </div>
        <div class="flex items-center space-x-6">
          <router-link to="/login" class="flex items-center font-bold text-gray-700 hover:text-blue-800 transition">
            <i class="far fa-user-circle text-2xl mr-2"></i> Log in
          </router-link>
          <router-link to="/signup" class="bg-[#001529] text-white px-7 py-2.5 rounded shadow-md font-bold hover:bg-black transition text-sm">
            Sign up
          </router-link>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-16">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-[#001529] mb-4">Sign up in the United States</h1>
        <p class="text-gray-600 text-lg">
          Not sure if you or your student qualify?
          <a
            href="#"
            class="text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:text-blue-900"
          >
            Check qualifications.
          </a>
        </p>
        <p class="text-gray-500 mt-2">
          Want to sign up from outside the United States?
          <a href="#" class="text-blue-700 font-semibold hover:underline">Go to global signup.</a>
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">School</h3>
          <p class="text-lg text-gray-600 mb-8">Free membership</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up school
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For schools and districts</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access textbooks and educational materials</p>
          </div>
        </div>
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center ring-2 ring-blue-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Student</h3>
          <p class="text-lg text-gray-600 mb-8">Free membership</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up student
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For students with qualifying disabilities</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access books for school and leisure</p>
          </div>
        </div>
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Adult</h3>
          <p class="text-lg text-gray-600 mb-8 font-semibold">$79.99 per year</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up adult
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For adults with qualifying disabilities</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access books for learning and leisure</p>
          </div>
        </div>
        <div class="pricing-card bg-white p-8 rounded-2xl flex flex-col items-center text-center">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Organization</h3>
          <p class="text-lg text-gray-600 mb-8 font-semibold">$79.99 per year*</p>
          <button class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition mb-8 shadow-md">
            Sign up organization
          </button>
          <div class="w-full border-t border-gray-100 pt-6 space-y-4">
            <p class="text-sm text-gray-500 leading-relaxed">For non-school organizations</p>
            <div class="divider"></div>
            <p class="text-sm text-gray-500 leading-relaxed font-medium">Access books for learning and leisure</p>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-[#003082] text-white py-16 mt-20">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-blue-800 pb-12">
        <div>
          <h4 class="font-bold mb-6 uppercase text-xs tracking-widest opacity-70">About</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Who we are</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
            <li><a href="#" class="hover:underline">Events</a></li>
            <li><a href="#" class="hover:underline">Media Kit</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase text-xs tracking-widest opacity-70">Get Involved</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Donate</a></li>
            <li><a href="#" class="hover:underline">Partner with us</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase text-xs tracking-widest opacity-70">Help</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Help Center</a></li>
            <li><a href="#" class="hover:underline">Contact us</a></li>
            <li><a href="#" class="hover:underline">Site map</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase text-xs tracking-widest opacity-70">Legal</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Legal</a></li>
            <li><a href="#" class="hover:underline">Privacy</a></li>
            <li><a href="#" class="hover:underline">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase text-xs tracking-widest opacity-70">Follow Us</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Our blog</a></li>
            <li><a href="#" class="hover:underline">Facebook</a></li>
            <li><a href="#" class="hover:underline">Instagram</a></li>
            <li><a href="#" class="hover:underline">X</a></li>
            <li><a href="#" class="hover:underline">Youtube</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase text-xs tracking-widest opacity-70">App</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">iOS / Android</a></li>
            <li><a href="#" class="hover:underline">Google/Android</a></li>
            <li><a href="#" class="hover:underline">Amazon Alexa</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 pt-10 text-[11px] opacity-60 flex flex-col md:flex-row justify-between gap-9">
        <div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis: 20%">
          <figure class="wp-block-image size-full">
            <img src="https://www.bookshare.org/wp-content/uploads/2024/04/White_BKS_Logo_2023.png" alt="Bookshare white logo" class="wp-image-9709" style="object-fit: cover" />
          </figure>
        </div>

        <p class="text-center md:text-left text-white">
          This project is supported by the U.S. Department of Education, Office of Special Education Programs (Award Number
          H327D220002). Opinions expressed herein are those of the authors and do not necessarily represent the position of
          the U.S. Department of Education.
          <br /><br />
          Bookshare® and Benetech® are registered trademarks of Beneficent Technology, Inc. © Copyright 2026, Beneficent
          Technology, Inc.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import TopUtilityBar from "../components/TopUtilityBar.vue";
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
}

.bg-bookshare-blue {
  background-color: #003082;
}

.pricing-card {
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #003082;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 20px 0;
}
</style>
