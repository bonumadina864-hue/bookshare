<template>
  <div class="bg-[#f9fafb]">
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <TopUtilityBar />
      <nav class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <router-link to="/" class="flex items-center">
          <img src="https://www.bookshare.org/images/logo_.png" alt="Bookshare" class="h-20" />
        </router-link>
        <div class="flex items-center space-x-6">
          <router-link to="/login" class="flex items-center font-bold text-gray-700 hover:text-blue-800 transition">
            <i class="far fa-user-circle text-2xl mr-2"></i> Log in
          </router-link>
          <router-link
            to="/signup"
            class="bg-[#001529] text-white px-7 py-2.5 rounded shadow-md font-bold hover:bg-black transition text-sm"
          >
            Sign up
          </router-link>
        </div>
      </nav>
    </header>

    <section class="hero-box">
      <div class="hero-inner">
        <h1 class="hero-text">How do educators add an Individual Membership to a student's school account?</h1>
      </div>
    </section>

    <main class="main-content">
      <div class="content-container">
        <section class="left-article">
          <p class="intro-text">
            Educators can easily enhance a student's school account to include a <strong>FREE</strong> Individual Membership.
            There is no new proof of disability form required for this process, as the student has already been verified for
            their school account. Adding the Individual Membership to a student's account provides many benefits:
          </p>

          <ul class="benefits-list">
            <li><strong>Full access to the entire Bookshare collection</strong>, beyond assigned texts</li>
            <li><strong>Independence</strong> in choosing what and when to read</li>
            <li><strong>Increased confidence</strong> through independent task completion</li>
            <li><strong>Development of self-directed accessibility skills</strong></li>
            <li><strong>A personal account</strong> that stays with the member through school and beyond</li>
          </ul>

          <h2 class="section-title">How to add an Individual Membership</h2>
          <ol class="steps-list">
            <li>Log into your <strong>Bookshare</strong> account.</li>
            <li>Select the <strong>Members</strong> link on your <strong>My Bookshare</strong> page.</li>
            <li><strong>Check the box</strong> next to one or more student names on the member roster.</li>
            <li>Scroll to the end of the roster to the <strong>More Options</strong> button and select <strong>Add Individual Membership</strong> from the dropdown menu.</li>
          </ol>

          <h2 class="section-title">Next Steps</h2>
          <p>You will see two options on the next screen:</p>

          <ol class="next-steps-list">
            <li>
              <strong>Request a new</strong> Individual Membership
              <ul>
                <li>The student(s) you selected will appear below.</li>
                <li>
                  Under the <strong>Options</strong> dropdown menu you can select to <strong>Send Email</strong> or
                  <strong>Download</strong> a form with instructions for completing the Individual Membership. Either way, the
                  individual membership is completed online.
                </li>
                <li>For students who are under 18, a parent or legal guardian must complete the registration process.</li>
              </ul>
            </li>
            <li>
              <strong>Link an existing</strong> Individual Membership
              <ul>
                <li>Enter the email address tied to the student's Individual Membership.</li>
                <li>Check the box confirming you have permission to link the accounts.</li>
              </ul>
            </li>
          </ol>

          <p class="video-link">Video: <a href="#">How to add Individual Memberships to student accounts</a></p>
          <p class="note"><strong>Note:</strong> Students under 18 are prohibited from accessing books marked as adult content.</p>
        </section>

        <aside class="right-sidebar">
          <div class="sidebar-card">
            <h3>Type</h3>
            <span class="tag tag-help">Help Article</span>
          </div>

          <div class="sidebar-card">
            <h3>Topic</h3>
            <div class="tags-group">
              <span class="tag">Account Management</span>
              <span class="tag">Higher Ed</span>
              <span class="tag">Individual Membership</span>
              <span class="tag">Membership</span>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <section class="similar-articles">
      <div class="sa-container">
        <h2 class="sa-title">Similar Articles</h2>

        <div class="sa-grid">
          <a href="#" class="sa-card">
            <div class="sa-icon">
              <i class="fas fa-question-circle"></i>
            </div>
            <div class="sa-text">How do Educators add students to their account?</div>
          </a>

          <a href="#" class="sa-card">
            <div class="sa-icon">
              <i class="fas fa-laptop"></i>
            </div>
            <div class="sa-text">ABCs of Bookshare for Educators</div>
          </a>

          <a href="#" class="sa-card">
            <div class="sa-icon">
              <i class="fas fa-laptop"></i>
            </div>
            <div class="sa-text">Bookshare Back-to-School Checklist</div>
          </a>
        </div>
      </div>
    </section>
    <br /><br /><br />
    <section class="cta-section">
      <h2 class="cta-title">Have more questions?</h2>
      <div class="cta-buttons">
        <a href="#" class="btn-dark"> Go to Help Center &nbsp; <span>→</span> </a>
        <a href="#" class="link-blue"> Contact us &nbsp; <span>›</span> </a>
      </div>
    </section>

    <footer class="bg-[#003082] text-white py-16 mt-20">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-blue-800 pb-12">
        <div>
          <h4 class="font-bold mb-6 uppercase font-family">About</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Who we are</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
            <li><a href="#" class="hover:underline">Events</a></li>
            <li><a href="#" class="hover:underline">Media Kit</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase font-family">Get Involved</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Donate</a></li>
            <li><a href="#" class="hover:underline">Partner with us</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase font-family">Help</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Help Center</a></li>
            <li><a href="#" class="hover:underline">Contact us</a></li>
            <li><a href="#" class="hover:underline">Site map</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase font-family">Legal</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Legal</a></li>
            <li><a href="#" class="hover:underline">Privacy</a></li>
            <li><a href="#" class="hover:underline">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase font-family">Follow Us</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Our blog</a></li>
            <li><a href="#" class="hover:underline">Facebook</a></li>
            <li><a href="#" class="hover:underline">Instagram</a></li>
            <li><a href="#" class="hover:underline">X</a></li>
            <li><a href="#" class="hover:underline">Youtube</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 uppercase font-family">App</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">iOS / Android</a></li>
            <li><a href="#" class="hover:underline">Google/Android</a></li>
            <li><a href="#" class="hover:underline">Amazon Alexa</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 pt-10 text-[11px] opacity-60 flex flex-col md:flex-row justify-between gap-9">
        <div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis: 20%">
          <figure class="wp-block-image size-full">
            <img src="https://www.bookshare.org/wp-content/uploads/2024/04/White_BKS_Logo_2023.png" alt="Bookshare white logo" class="wp-image-9709" style="object-fit: cover" />
          </figure>
        </div>

        <p class="text-center md:text-left text-white">
          This project is supported by the U.S. Department of Education, Office of Special Education Programs (Award Number
          H327D220002). Opinions expressed herein are those of the authors and do not necessarily represent the position of
          the U.S. Department of Education.
          <br /><br />
          Bookshare® and Benetech® are registered trademarks of Beneficent Technology, Inc. © Copyright 2026, Beneficent
          Technology, Inc.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import TopUtilityBar from "../components/TopUtilityBar.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
}
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.top-utility-bar {
  background-color: #e2f5ee;
  padding: 8px 0;
  text-align: right;
  font-size: 13px;
}

.top-utility-bar a {
  color: #003082;
  text-decoration: none;
  font-weight: 600;
  margin-right: 20px;
}

.language-selector {
  display: inline-block;
  color: #003082;
  cursor: pointer;
}

.main-header {
  background: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 35px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 25px;
}

.main-nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 15px;
}

.main-nav ul li a i {
  font-size: 12px;
  margin-left: 3px;
}

.header-auth {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-log-in {
  text-decoration: none;
  color: #333;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-sign-up {
  background-color: #001a33;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: 700;
}

.hero-box {
  background-color: #d8e6f3;
  background-image: radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.6) 0%, transparent 55%);
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
}

.hero-inner {
  width: 1140px;
  padding: 0 20px;
}

.hero-text {
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 64px;
  color: #003082;
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin: 0;
  text-align: left;
}

@media (max-width: 768px) {
  .hero-text {
    font-size: 38px;
    letter-spacing: -0.5px;
  }
}

.main-content {
  background-color: #ffffff;
  padding: 60px 0;
  font-family: "Open Sans", sans-serif;
  color: #333333;
}

.content-container {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  padding: 0 20px;
}

.left-article {
  flex: 2;
}

.intro-text {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.benefits-list,
.steps-list,
.next-steps-list {
  margin-bottom: 30px;
  padding-left: 20px;
}

.benefits-list li,
.steps-list li,
.next-steps-list li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.next-steps-list ul {
  margin-top: 10px;
  list-style-type: circle;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  margin: 40px 0 20px 0;
  color: #001a4d;
}

.video-link a {
  color: #007bff;
  text-decoration: underline;
}

.note {
  margin-top: 30px;
}

.right-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background-color: #f8fcfb;
  border-radius: 12px;
  padding: 25px;
}

.sidebar-card h3 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #001a4d;
}

.tags-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.tag {
  background-color: #e2f5ee;
  color: #2c5e4f;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}

@media (max-width: 900px) {
  .content-container {
    flex-direction: column;
  }
}

.content-wrapper {
  display: flex;
  gap: 60px;
  padding: 50px 0;
}
.main-article {
  flex: 2;
  left: 50px;
}
.summary-text {
  font-size: 16px;
  margin-bottom: 20px;
}

.check-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 35px;
}
.check-list li::before {
  content: "•";
  color: #333;
  font-weight: bold;
  display: inline-block;
  width: 1.5em;
  margin-left: 5px;
}
.check-list li {
  margin-bottom: 8px;
}

.section-h2 {
  font-size: 28px;
  font-weight: 800;
  margin: 40px 0 20px;
  color: var(--text-dark);
}
.ordered-steps {
  padding-left: 20px;
}
.ordered-steps li {
  margin-bottom: 12px;
}

.option-block {
  margin-top: 25px;
}
.option-block ul {
  padding-left: 20px;
  margin-top: 10px;
  font-size: 14px;
}

.video-cta {
  margin-top: 30px;
  font-weight: 700;
}
.video-cta a {
  color: var(--primary-blue);
  text-decoration: underline;
}
.note-box {
  border-top: 1px solid #eee;
  margin-top: 40px;
  padding-top: 20px;
  font-size: 14px;
}

.sidebar-area {
  flex: 1;
}
.side-card {
  background: #f8fafc;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.side-card h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 800;
}
.label-tag {
  display: inline-block;
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 8px;
  margin-bottom: 8px;
}

.similar-articles {
  background-color: #ebf1f7;
  padding: 80px 0;
  font-family: "Open Sans", sans-serif;
}

.sa-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.sa-title {
  font-size: 42px;
  font-weight: 700;
  color: #051224;
  margin-bottom: 50px;
}

.sa-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.sa-card {
  background-color: #ffffff;
  border: 1px solid #003082;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 30px 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s;
  min-height: 100px;
}

.sa-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background-color: #204c92;
}

.sa-icon {
  font-size: 32px;
  color: #204c92;
  margin-right: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sa-text {
  font-size: 17px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: left;
  line-height: 1.4;
}

.sa-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

@media (max-width: 991px) {
  .sa-grid {
    grid-template-columns: 1fr;
  }
  .sa-title {
    font-size: 32px;
  }
}

.similar-articles {
  background-color: #f0f7ff;
  padding: 60px 20px;
  text-align: center;
}

.cta-section {
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  color: #001a33;
  margin-bottom: 50px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-dark {
  background-color: #1a202c;
  color: white;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: 0.3s;
}

.btn-dark:hover {
  background-color: #000;
}

.link-blue {
  color: #0056b3;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.link-blue:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .cta-buttons {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
