<script setup>
import { ref } from "vue";
import TopUtilityBar from "../components/TopUtilityBar.vue";

const mobileMenuOpen = ref(false);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <div class="bg-[#0647b9]">
    <TopUtilityBar />

    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <router-link to="/" class="mr-10">
            <img src="https://www.bookshare.org/images/logo_.png" alt="Bookshare" />
          </router-link>
          <div class="hidden lg:flex space-x-8 text-[15px] font-semibold text-gray-700">
            <a href="#" class="hover:text-blue-800">What is Bookshare?</a>
            <a href="#" class="hover:text-blue-800">Who is Bookshare for?</a>
          </div>
        </div>

        <div class="flex items-center space-x-4 md:space-x-6">
          <router-link to="/signup" class="hidden sm:block bg-[#001529] text-white px-6 py-2 rounded font-bold hover:bg-black transition text-sm">
            Sign up
          </router-link>
          <button class="lg:hidden text-gray-700 text-2xl" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <div :class="mobileMenuOpen ? 'block' : 'hidden'" class="lg:hidden bg-white border-t px-6 py-4 space-y-4 shadow-lg">
        <a href="#" class="block font-semibold text-gray-700">What is Bookshare?</a>
        <a href="#" class="block font-semibold text-gray-700">Who is Bookshare for?</a>
        <router-link to="/signup" class="block font-bold text-blue-800">Sign up</router-link>
      </div>
    </header>

    <main class="login-container flex items-center justify-center px-6 py-12 md:py-20">
      <div class="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-[#001529] mb-2">Log In</h1>
          <p class="text-gray-500 text-sm">Xush kelibsiz! Shaxsiy hisobingizga kiring.</p>
        </div>

        <form action="#" class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Username or Email</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i class="fas fa-envelope"></i>
              </span>
              <input
                type="text"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i class="fas fa-lock"></i>
              </span>
              <input
                type="password"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" class="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span class="ml-2 text-gray-600">Eslab qolish</span>
            </label>
            <router-link to="/forget" class="text-blue-700 font-semibold hover:underline">Parolni unutdingizmi?</router-link>
          </div>

          <button type="submit" class="w-full bg-[#003082] text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-900 shadow-lg hover:shadow-blue-200 transition duration-300">
            Kirish
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-gray-100 text-center">
          <p class="text-gray-600">
            A'zo emasmisiz? <router-link to="/signup" class="text-blue-700 font-bold hover:underline">Ro'yxatdan o'tish</router-link>
          </p>
        </div>
      </div>
    </main>

    <footer class="minimal-footer">
      <div class="footer-container">
        <div class="footer-top-row">
          <div class="social-icons">
            <a href="#" class="social-link facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link youtube"><i class="fab fa-youtube"></i></a>
          </div>

          <nav class="footer-nav">
            <a href="#">About</a>
            <a href="#">Partners</a>
            <a href="#">Legal</a>
            <a href="#">Accessibility</a>
            <a href="#">Blog</a>
            <a href="#">Donate</a>
            <a href="#">Privacy</a>
            <a href="#">Site Search</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>

        <div class="footer-bottom-row">
          <p>
            Bookshare® and Benetech® are registered trademarks of Beneficent Technology, Inc. This website is © Copyright
            2002-2026, Beneficent Technology, Inc.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  font-family: "Open Sans", sans-serif;
}

.login-container {
  min-height: calc(100vh - 200px);
}

.minimal-footer {
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 40px 20px 30px 20px;
  font-family: "Open Sans", sans-serif;
  width: 100%;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.social-icons {
  display: flex;
  gap: 25px;
}

.social-link {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.social-link:hover {
  transform: scale(1.15);
}

.facebook {
  color: #3b5998;
}
.twitter {
  color: #1da1f2;
}
.instagram {
  color: #e1306c;
}
.youtube {
  color: #ff0000;
}

.footer-nav {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-nav a {
  color: #1a0dab;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.footer-nav a:hover {
  text-decoration: underline;
}

.footer-bottom-row {
  text-align: center;
  margin-top: 10px;
}

.footer-bottom-row p {
  color: #555555;
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .footer-top-row {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }

  .footer-nav {
    justify-content: center;
    gap: 15px;
  }
}
</style>
