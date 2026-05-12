<template>
  <div class="site-map-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto px-6 h-full flex items-center">
        <h1 class="text-white text-6xl font-light tracking-tight">Site map</h1>
      </div>
    </section>

    <div class="container mx-auto py-16 px-6">
      <h2 class="text-[40px] font-bold text-[#111111] mb-8">Primary navigation</h2>
      
      <div class="site-map-content">
        <ul class="main-list">
          <li><router-link to="/">Home page</router-link></li>
          <li>
            What is Bookshare?
            <ul class="sub-list">
              <li><router-link to="/bookshare-library">Bookshare Library</router-link></li>
              <li><router-link to="/bookshare-reader">Bookshare Reader</router-link></li>
            </ul>
          </li>
          <li>
            Who is Bookshare for?
            <ul class="sub-list">
              <li><router-link to="/learn-for">Parents and students</router-link></li>
              <li>
                <router-link to="/educators-and-schools">Educators and schools</router-link>
                <ul class="nested-list">
                  <li><a href="#">Early childhood professionals and families</a></li>
                </ul>
              </li>
              <li><router-link to="/higher-education-students">Higher education students</router-link></li>
              <li><router-link to="/adults">Adults</router-link></li>
              <li><router-link to="/global">Global</router-link></li>
            </ul>
          </li>
          <li><router-link to="/explore-library">Explore</router-link></li>
          <li><router-link to="/login">Log in</router-link></li>
          <li><router-link to="/signup">Sign up</router-link></li>
        </ul>

        <h2 class="text-[40px] font-bold text-[#111111] mt-16 mb-8">Footer</h2>
        
        <div class="footer-sections space-y-12">
          <div>
            <h3 class="text-[28px] font-bold text-[#111111] mb-6">About</h3>
            <ul class="main-list">
              <li><router-link to="/who-we-are">Who we are</router-link></li>
              <li><a href="https://benetech.org/careers/" target="_blank" rel="noopener noreferrer">Career</a></li>
              <li><router-link to="/events">Events</router-link></li>
              <li><router-link to="/media-kit">Media kit</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="text-[28px] font-bold text-[#111111] mb-6">Get involved</h3>
            <ul class="main-list">
              <li><router-link to="/donate">Donate</router-link></li>
              <li><router-link to="/partner-with-us">Partner with us</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="text-[28px] font-bold text-[#111111] mb-6">Help</h3>
            <ul class="main-list">
              <li><a href="#">Help and learning</a></li>
              <li><router-link to="/contact-us">Contact us</router-link></li>
              <li><router-link to="/site-map">Site map</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="text-[28px] font-bold text-[#111111] mb-6">Legal</h3>
            <ul class="main-list">
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-[28px] font-bold text-[#111111] mb-6">Follow us</h3>
            <ul class="main-list">
              <li><a href="https://www.bookshare.org/cms/blog" target="_blank" rel="noopener noreferrer">Our blog</a></li>
              <li><a href="https://www.facebook.com/bookshare" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/bookshare_org/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com/bookshare" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://www.youtube.com/user/Bookshare" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-[28px] font-bold text-[#111111] mb-6">Download</h3>
            <ul class="main-list">
              <li><a href="#">Apple/iOS</a></li>
              <li><a href="#">Google/Android</a></li>
              <li><a href="#">Amazon/Alexa</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Site Map logic
</script>

<style scoped>
.site-map-content {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.main-list {
  list-style-type: disc;
  padding-left: 20px;
}

.main-list li {
  margin-bottom: 4px;
}

.main-list a {
  color: #0056b3;
  text-decoration: underline;
}

.main-list a:hover {
  text-decoration: none;
}

.sub-list {
  list-style-type: circle;
  padding-left: 20px;
  margin-top: 4px;
}

.nested-list {
  list-style-type: square;
  padding-left: 20px;
  margin-top: 4px;
}

.hero-section {
  height: 320px;
  background-image: url('https://www.bookshare.org/wp-content/uploads/2024/01/Page-Hero-Background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-section h1 {
  font-size: 72px;
  line-height: 1.1;
}

@media (max-width: 768px) {
  .hero-section {
    height: 150px;
  }
  .hero-section h1 {
    font-size: 2.5rem;
  }
}
</style>
