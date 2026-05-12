<template>
  <div class="bg-[#f9fafb]">
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
      <div class="cta-container">
        <h2 class="cta-title">Have more questions?</h2>
        <div class="cta-buttons">
          <a href="#" class="btn-help-center">
            Go to Help Center
            <svg class="cta-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <router-link to="/contact-us" class="link-contact">
            Contact us
            <svg class="cta-link-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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

.similar-articles {
  background-color: #f0f7ff;
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

.cta-section {
  background-color: #ffffff;
  padding: 80px 0 100px;
  text-align: center;
}

.cta-container {
  max-width: 1140px;
  margin: 0 auto;
}

.cta-title {
  font-size: 48px;
  font-weight: 800;
  color: #001a4d;
  margin-bottom: 40px;
  letter-spacing: -1px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.btn-help-center {
  background-color: #111d2b;
  color: white;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s;
}

.btn-help-center:hover {
  background-color: #000000;
}

.cta-icon {
  width: 18px;
  height: 18px;
}

.link-contact {
  color: #0056b3;
  text-decoration: underline;
  font-weight: 700;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.cta-link-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 640px) {
  .cta-title {
    font-size: 32px;
  }
  .cta-buttons {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
