<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <div>
    <header class="navbar">
      <div class="logo">
        <router-link to="/"><img src="https://www.bookshare.org/images/logo_.png" alt="" /></router-link>
      </div>
      <button class="burger-btn" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
      <nav class="nav-links">
        <a href="#">Browse</a>
        <a href="#">Home</a>
        <a href="#">Help Center</a>
        <a href="#">My Bookshare</a>
        <router-link to="/login2"><button class="login-btn"><i class="far fa-user-circle"></i> Log in</button></router-link>
      </nav>
    </header>
    <nav v-if="menuOpen" class="mobile-nav-links">
      <a href="#">Browse</a>
      <a href="#">Home</a>
      <a href="#">Help Center</a>
      <a href="#">My Bookshare</a>
      <router-link to="/login2">Log in</router-link>
    </nav>

    <main class="error-container">
      <div class="error-box">
        <h1>Do you need assistance?</h1>
        <div class="error-message">
          <p class="red-text">There is no information available on this apparent error.</p>
          <p>Please contact us if you need assistance.</p>
        </div>
      </div>
      <div class="suggestions">
        <p>Here are a few things you can try:</p>
        <ul>
          <li>Visit the <a href="#">Help Center</a> for updated FAQs</li>
          <li>Go back to the previous page</li>
          <li>Go to the <a href="#">Bookshare homepage</a></li>
          <li>Contact our <a href="#">support team</a></li>
        </ul>
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

<style src="../../book/login.css"></style>
