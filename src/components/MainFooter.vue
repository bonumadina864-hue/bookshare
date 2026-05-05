<template>
  <footer class="bg-[#0a327d] text-white py-16 px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <div>
          <h4 class="uppercase font-bold text-lg mb-4">About</h4>
          <ul class="space-y-3 text-sm">
            <li>
              <router-link to="/who-we-are" class="underline">Who we are</router-link>
            </li>
            <li>
              <a href="https://benetech.org/careers/" target="_blank" rel="noopener noreferrer" class="underline">Careers</a>
            </li>
            <li><router-link to="/events" class="underline">Events</router-link></li>
            <li><router-link to="/media-kit" class="underline">Media Kit</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="uppercase font-bold text-lg mb-4">Get Involved</h4>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/donate" class="underline">Donate</router-link></li>
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
</template>
