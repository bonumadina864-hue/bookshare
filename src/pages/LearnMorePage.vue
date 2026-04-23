<template>
  <div class="bg-[#f9fafb]">
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <div class="bg-[#f0f4f8] py-1.5 px-6 md:px-12 text-right text-xs font-medium text-blue-900 border-b border-gray-200">
        <a href="#" class="hover:underline">Donate</a>
      </div>
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

<style src="../../book/learn-more.css"></style>
