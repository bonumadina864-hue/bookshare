<template>
  <div>
    <header class="bs-forgot-header">
      <div class="bs-container">
        <div class="header-inner">
          <div class="bs-logo-wrapper">
            <router-link to="/" class="bookshare-brand">
              <img src="https://www.bookshare.org/images/logo_.png" alt="Bookshare" />
            </router-link>
          </div>
          <div class="bs-login-link">
            <router-link to="/login2">Log in</router-link>
          </div>
        </div>
      </div>
    </header>

    <main class="bs-main-area">
      <div class="bs-container-narrow">
        <h1 class="page-title">Forgot Password</h1>
        <p class="instruction-text">Provide your email address and you will be sent instructions on how to set a new password.</p>
        <form class="forgot-password-form">
          <div class="form-group">
            <label for="email">Email <span class="required">*</span></label>
            <input id="email" type="email" name="email" required />
          </div>
          <button type="submit" class="btn-reset">Reset Password</button>
        </form>
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

<style src="../../book/forget.css"></style>
