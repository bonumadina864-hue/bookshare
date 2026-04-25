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
        <router-link to="/"><img src="https://www.bookshare.org/wp-content/uploads/2024/04/White_BKS_Logo_2023.png" alt="Bookshare" /></router-link>
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #2b4089;
  padding: 16px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.logo img {
  height: 74px;
  width: auto;
  display: block;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 14px;
}

.login-btn {
  background: transparent;
  border: 1px dashed white;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.burger-btn {
  display: none;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.mobile-nav-links {
  display: none;
  background-color: #2b4089;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding: 10px 18px 16px;
}

.mobile-nav-links a {
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  padding: 8px 0;
}

.error-container {
  padding: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

.error-box {
  background-color: #f9e6e6;
  border: 1px solid #e0c3c3;
  padding: 30px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.error-box h1 {
  color: #4a6da7;
  font-size: 32px;
  margin-bottom: 20px;
}

.red-text {
  color: #a94442;
  font-weight: bold;
  margin-bottom: 10px;
}

.suggestions {
  margin-top: 20px;
  line-height: 1.8;
}

.suggestions ul {
  margin-left: 20px;
  margin-top: 10px;
}

.suggestions a {
  color: #0056b3;
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

.facebook { color: #3b5998; }
.twitter { color: #1da1f2; }
.instagram { color: #e1306c; }
.youtube { color: #ff0000; }

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
  .navbar {
    padding: 12px 16px;
  }

  .logo img {
    height: 46px;
  }

  .nav-links {
    display: none;
  }

  .burger-btn {
    display: block;
  }

  .mobile-nav-links {
    display: block;
  }

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
