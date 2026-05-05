<template>
  <div>
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
          <li>Go to the <router-link to="/">Bookshare homepage</router-link></li>
          <li>Contact our <a href="#">support team</a></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
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
</style>
