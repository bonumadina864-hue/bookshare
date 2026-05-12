<template>
  <div class="min-h-screen bg-white font-sans flex flex-col">
    <!-- Blue Header (First Successful Version) -->
    <header class="bg-[#1a4696] text-white pt-6 pb-6 px-6 md:px-12">
      <div class="mx-auto max-w-[1200px]">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Logo Section -->
          <div class="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <router-link to="/">
              <img 
                src="https://d179b0ow2luotx.cloudfront.net/50e6c128c39c02d555342a4dc0d6ae647898184b/img/bks-logo.svg" 
                alt="Bookshare" 
                style="width: 215px; height: auto; filter: brightness(0) invert(1);"
                class="block"
              />
            </router-link>
          </div>

          <!-- Top Right Actions -->
          <div class="flex flex-col items-center md:items-end gap-6">
            <!-- Log in button -->
            <router-link to="/login2" class="border border-white/50 px-5 py-1 text-sm hover:bg-white/10 transition rounded-sm cursor-pointer font-medium text-white">
              Log in
            </router-link>
            <!-- Sub Navigation -->
            <nav class="flex items-center gap-4 md:gap-6 text-[15px] font-normal text-white">
              <router-link to="/explore-library" class="hover:underline">Browse</router-link>
              <router-link to="/" class="hover:underline">Home</router-link>
              <a href="#" class="hover:underline">Help Center</a>
              <a href="#" class="hover:underline">My Bookshare</a>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content (Assistance Box) -->
    <main class="flex-grow mx-auto w-full max-w-[1100px] px-6 py-6">
      <!-- Assistance Alert Box (1:1 with 2nd image - compact spacing) -->
      <div class="bg-[#f2dede] border border-[#ebccd1] p-8 rounded-sm mb-10">
        <h1 class="text-[#1a4696] text-[38px] font-normal mb-4">Do you need assistance?</h1>
        <div class="space-y-1">
          <p class="text-[#a94442] font-bold text-[18px]">There is no information available on this apparent error.</p>
          <p class="text-[#a94442] text-[18px]">Please <router-link to="/contact-us" class="underline">contact us</router-link> if you need assistance.</p>
        </div>
      </div>

      <!-- Suggestions Section -->
      <div class="space-y-5 text-gray-800 text-[16px]">
        <p class="font-normal">Here are a few things you can try:</p>
        <ul class="list-disc ml-8 space-y-2">
          <li>Visit the <a href="#" class="text-[#1a4696] hover:underline">Help Center</a> for updated FAQs</li>
          <li>Go back to the previous page</li>
          <li>Go to the <router-link to="/" class="text-[#1a4696] hover:underline">Bookshare homepage</router-link></li>
          <li>Contact our <router-link to="/contact-us" class="text-[#1a4696] hover:underline">support team</router-link></li>
        </ul>
      </div>
    </main>

    <!-- Footer (1:1 with original site) -->
    <footer class="border-t border-gray-300 py-6 px-6 mt-auto bg-white">
      <div class="mx-auto max-w-[1240px]">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <!-- Social Icons - Official spacing and order -->
          <div class="flex items-center gap-8 text-2xl">
            <a href="#" class="text-[#3b5998] hover:opacity-80 transition"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-[#1da1f2] hover:opacity-80 transition"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-[#e4405f] hover:opacity-80 transition"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-[#ff0000] hover:opacity-80 transition"><i class="fab fa-youtube"></i></a>
          </div>

          <!-- Footer Links - Standard blue links -->
          <nav class="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[16px] text-[#24408e] font-normal">
            <a href="#" class="hover:underline">About</a>
            <router-link to="/partner-with-us" class="hover:underline">Partners</router-link>
            <a href="#" class="hover:underline">Legal</a>
            <a href="#" class="hover:underline">Accessibility</a>
            <a href="#" class="hover:underline">Blog</a>
            <router-link to="/donate" class="hover:underline">Donate</router-link>
            <a href="#" class="hover:underline">Privacy</a>
            <a href="#" class="hover:underline">Site Search</a>
            <router-link to="/contact-us" class="hover:underline">Contact Us</router-link>
          </nav>
        </div>

        <!-- Copyright Info -->
        <div class="text-center text-[13px] text-gray-500 max-w-[900px] mx-auto leading-relaxed">
          <p>
            Bookshare® and Benetech® are registered trademarks of Beneficent Technology, Inc. This website is © Copyright 2002-2026, Beneficent Technology, Inc.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Page specific styles matching the image */
</style>
