<template>
  <div class="min-h-screen bg-white font-sans flex flex-col">
    <!-- Orange Top Bar -->
    <div class="h-1.5 bg-[#f37021]"></div>
    
    <!-- Blue Header (Official Design - Compact) -->
    <header class="bg-[#24408e] text-white pt-5 pb-6 px-6 md:px-12">
      <div class="mx-auto max-w-[1240px]">
        <div class="flex flex-col md:flex-row items-end justify-between">
          <!-- Logo Section -->
          <div class="flex flex-col items-start">
            <router-link to="/" class="mb-2">
              <img 
                src="https://d179b0ow2luotx.cloudfront.net/50e6c128c39c02d555342a4dc0d6ae647898184b/img/bks-logo.svg" 
                alt="Bookshare" 
                style="width: 215px; height: auto; filter: brightness(0) invert(1);"
                class="block"
              />
            </router-link>
          </div>

          <!-- Top Right Actions -->
          <div class="flex flex-col items-end gap-6">
            <!-- Log in button -->
            <router-link to="/login2" class="border border-dotted border-white/80 px-6 py-1 text-[15px] hover:bg-white/10 transition rounded-sm cursor-pointer font-medium text-white">
              Log in
            </router-link>
            
            <!-- Sub Navigation -->
            <nav class="flex items-center gap-6 md:gap-8 text-[18px] font-normal text-white">
              <router-link to="/explore-library" class="hover:underline">Browse</router-link>
              <router-link to="/" class="hover:underline">Home</router-link>
              <a href="#" class="hover:underline">Help Center</a>
              <a href="#" class="hover:underline">My Bookshare</a>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Support Center Content -->
    <main class="flex-grow bg-white py-12 px-6 md:px-12 font-sans text-gray-800">
      <div class="mx-auto max-w-[1040px]">
        <!-- Top Title -->
        <div class="border-b border-gray-300 pb-2 mb-10">
          <h1 class="text-[34px] text-[#24408e] font-normal leading-tight">Support Center</h1>
        </div>

        <div class="flex flex-col md:flex-row gap-16">
          <!-- Sidebar -->
          <aside class="w-full md:w-44 shrink-0">
            <ul class="space-y-1 text-[13px] ml-4">
              <li class="list-disc">
                <a href="#" class="text-blue-700 hover:underline">My Requests</a>
              </li>
              <li class="list-disc">
                <a href="#" class="text-blue-700 hover:underline">Contact Us</a>
              </li>
            </ul>
          </aside>

          <!-- Main Form Area -->
          <div class="flex-grow">
            <h2 class="text-[32px] text-[#24408e] font-normal mb-1">Contact Us</h2>
            <p class="text-[14px] font-bold text-gray-800 mb-8">Have a question? We are here to help.</p>

            <!-- FAQs Section -->
            <div class="mb-10">
              <h3 class="text-[26px] text-[#24408e] font-normal mb-3">FAQs and Tutorials</h3>
              <p class="text-[13px] text-gray-800 leading-relaxed mb-4">
                For answers to frequently asked questions, visit our 
                <a href="#" class="text-blue-700 hover:underline">Help Center</a>. 
                For tutorials and training, visit our 
                <a href="#" class="text-blue-700 hover:underline">Learning Center</a>.
              </p>
              <p class="text-[13px] text-gray-800">For all other questions, contact us through the following channels.</p>
            </div>

            <!-- Form Section -->
            <div class="mb-14">
              <h3 class="text-[26px] text-[#24408e] font-normal mb-3">Contact Form</h3>
              <p class="text-[14px] font-bold text-gray-800 italic mb-6">Fields marked with <span class="text-red-600">*</span> are required.</p>

              <form @submit.prevent="handleSubmit" class="space-y-3 max-w-[650px]">
                <!-- Email -->
                <div class="flex flex-col md:flex-row md:items-start">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800 pt-1">Email <span class="text-red-600">*</span></label>
                  <div class="flex flex-col flex-grow md:max-w-[400px]">
                    <input 
                      v-model="email"
                      @blur="validateEmail"
                      type="text" 
                      class="w-full border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm h-[32px]" 
                      :class="{'border-red-500': emailError}"
                    />
                    <p v-if="emailError" class="text-red-500 text-[11px] mt-1">{{ emailError }}</p>
                  </div>
                </div>
                <!-- First Name -->
                <div class="flex flex-col md:flex-row md:items-center">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800">First Name <span class="text-red-600">*</span></label>
                  <input type="text" class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm h-[32px]" />
                </div>
                <!-- Last Name -->
                <div class="flex flex-col md:flex-row md:items-center">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800">Last Name <span class="text-red-600">*</span></label>
                  <input type="text" class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm h-[32px]" />
                </div>
                <!-- Org Name -->
                <div class="flex flex-col md:flex-row md:items-start pt-1">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800 leading-tight">School/District/Organization<br/>Name</label>
                  <input type="text" class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm h-[32px]" />
                </div>
                <!-- Country -->
                <div class="flex flex-col md:flex-row md:items-center">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800">Country <span class="text-red-600">*</span></label>
                  <select class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm bg-white cursor-pointer h-[32px]">
                    <option>United States</option>
                  </select>
                </div>
                <!-- State -->
                <div class="flex flex-col md:flex-row md:items-center">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800">State/Province <span class="text-red-600">*</span></label>
                  <select class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm bg-white cursor-pointer h-[32px]">
                    <option>Select...</option>
                  </select>
                </div>
                <!-- Topic -->
                <div class="flex flex-col md:flex-row md:items-center">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800">My question is about <span class="text-red-600">*</span></label>
                  <select class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm outline-none focus:border-blue-400 rounded-sm bg-white cursor-pointer h-[32px]">
                    <option>Select...</option>
                  </select>
                </div>
                <!-- Question -->
                <div class="flex flex-col md:flex-row md:items-start">
                  <label class="w-full md:w-48 text-[14px] font-bold text-gray-800">Your question <span class="text-red-600">*</span></label>
                  <textarea class="flex-grow md:max-w-[400px] border border-gray-300 p-1.5 text-sm h-44 outline-none focus:border-blue-400 rounded-sm resize-y"></textarea>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-start pt-4 mb-2">
                  <button type="submit" class="bg-[#4a6da7] text-white px-5 py-2 text-[14px] font-bold hover:bg-[#3b5998] transition rounded-sm shadow-sm border border-[#3b5998]">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <!-- Contact Info Footer -->
            <div class="space-y-6">
              <div>
                <h3 class="text-[26px] text-[#24408e] font-normal mb-1">Email</h3>
                <a href="#" class="text-[14px] text-blue-700 hover:underline">Email support</a>
              </div>
              <div>
                <h3 class="text-[26px] text-[#24408e] font-normal mb-1">Phone</h3>
                <p class="text-[14px] text-gray-800">650.352.0198. Monday through Friday from 5AM to 5PM Pacific Time.</p>
              </div>
              <div>
                <h3 class="text-[26px] text-[#24408e] font-normal mb-1">Social Media</h3>
                <ul class="space-y-1 text-[14px] ml-6">
                  <li class="list-disc"><a href="#" class="text-blue-700 hover:underline">Facebook</a></li>
                  <li class="list-disc"><a href="#" class="text-blue-700 hover:underline">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer (Standard) -->
    <footer class="border-t border-gray-800 py-12 px-6 mt-auto bg-white w-full">
      <div class="mx-auto max-w-[1200px]">
        <div class="flex flex-col md:flex-row items-center justify-center gap-x-24 gap-y-6 mb-10">
          <!-- Social Icons -->
          <div class="flex items-center gap-7 text-[20px]">
            <a href="#" class="text-[#3b5998] hover:opacity-80 transition" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-[#00acee] hover:opacity-80 transition" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-[#d6249f] hover:opacity-80 transition" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-[#c4302b] hover:opacity-80 transition" title="YouTube"><i class="fab fa-youtube"></i></a>
          </div>

          <!-- Footer Links -->
          <nav class="flex flex-wrap justify-center gap-x-12 text-[14px] text-[#0033cc] font-medium">
            <a href="#" class="hover:underline">About</a>
            <router-link to="/partner-with-us" class="hover:underline">Partners</router-link>
            <a href="#" class="hover:underline">Legal</a>
            <a href="#" class="hover:underline">Accessibility</a>
            <a href="#" class="hover:underline">Blog</a>
            <router-link to="/donate" class="hover:underline">Donate</router-link>
            <a href="#" class="hover:underline">Privacy</a>
            <router-link to="/site-map" class="hover:underline">Site Map</router-link>
            <router-link to="/contact-us" class="hover:underline">Contact Us</router-link>
          </nav>
        </div>

        <!-- Copyright -->
        <div class="text-center text-[12px] text-gray-700 w-full mx-auto leading-relaxed tracking-[0.03em] font-normal mt-2">
          <p>
            Bookshare® and Benetech® are registered trademarks of Beneficent Technology, Inc. This website is © Copyright 2002-2026, Beneficent Technology, Inc.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const emailError = ref('')

const validateEmail = () => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!email.value) {
    emailError.value = 'Email is required.'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address (e.g., example@gmail.com).'
  } else {
    emailError.value = ''
  }
}

const handleSubmit = () => {
  validateEmail()
  if (!emailError.value && email.value) {
    alert('Form submitted successfully!')
    // Here you would typically send data to your API
  } else if (!email.value) {
    emailError.value = 'Email is required.'
  }
}
</script>

<style scoped>
/* Page specific styles */
</style>
