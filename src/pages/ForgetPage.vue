<template>
  <div>
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
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Open Sans", Arial, sans-serif;
  color: #333;
  background-color: #ffffff;
}

.bs-container-narrow {
  max-width: 1095px;
  margin: 0 auto;
  padding: 40px 0;
}

.bs-forgot-header {
  background-color: #2b4089;
  padding: 16px 0;
  font-family: "Open Sans", Arial, sans-serif;
  width: 100%;
}

.bs-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 100px;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
}

.bs-logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bookshare-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.bs-logo-wrapper img {
  height: 74px;
  width: auto;
  display: block;
}

.bs-login-link a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "Open Sans", Arial, sans-serif;
  transition: opacity 0.2s;
}

.bs-login-link a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.page-title {
  font-size: 36px;
  color: #4a6fa5;
  font-weight: 500;
  margin-bottom: 20px;
}

.instruction-text {
  font-size: 14px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
}

.required {
  color: #d9534f;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.btn-reset {
  background-color: #4a6fa5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.minimal-footer {
  background-color: #ffffff;
  border-top: 1px solid #0b0b0b;
  padding: 22px 10px 20px;
  font-family: "Open Sans", sans-serif;
  width: 100%;
}

.footer-container {
  max-width: 1050px;
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

@media (max-width: 992px) {
  .bs-container-narrow {
    padding: 32px 16px;
  }
}

@media (max-width: 768px) {
  .bs-container {
    padding: 0 16px;
  }

  .bs-forgot-header {
    padding: 10px 0;
  }

  .header-inner {
    padding: 6px 0;
  }

  .bs-logo-wrapper img {
    height: 46px;
    width: auto;
  }

  .page-title {
    font-size: 30px;
  }

  .bs-login-link a { font-size: 14px; }

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

@media (max-width: 600px) {
  .bs-logo-wrapper img {
    height: 34px;
    width: auto;
  }
}

@media (max-width: 480px) {
  .header-inner {
    gap: 10px;
  }

  .bs-login-link a {
    font-size: 14px;
  }

  .page-title {
    font-size: 26px;
  }

  .instruction-text {
    font-size: 13px;
  }

  .btn-reset {
    width: 100%;
  }
}
</style>
