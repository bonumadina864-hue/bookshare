<template>
  <div>
    <section class="media-kit-page">
      <div class="media-kit-page__inner">
        <h1>Media Kit</h1>
      </div>
    </section>

    <section class="media-content">
      <div class="media-content__inner">
        <p class="intro">
          Do you know someone who could benefit from using Bookshare? Spread the word to educators, parents, individuals,
          and organizations. We've provided handy resources to make sharing easy.
        </p>

        <div class="resource-block">
          <h2>Logo</h2>
          <p>Use the Bookshare logo for digital communications.</p>
          <a class="btn" href="https://www.bookshare.org/wp-content/uploads/2024/02/Bookshare_Logo_5450x944.png" target="_blank" rel="noopener noreferrer"
            >Download Bookshare Logo (.png)</a
          >
        </div>

        <div class="resource-block">
          <h2>Brochure</h2>
          <p>Share a digital version of the Bookshare brochure, or print it out as a handout.</p>
          <div class="btn-row">
            <a class="btn" href="https://www.bookshare.org/wp-content/uploads/2025/12/Bookshare_Brochure_Print_only.pdf" target="_blank" rel="noopener noreferrer"
              >Download Print-only Brochure (.pdf)</a
            >
            <a class="btn" href="https://www.bookshare.org/campaigns/bks-brochure" target="_blank" rel="noopener noreferrer">Accessible Digital Brochure (Webpage)</a>
          </div>
        </div>

        <div class="resource-block">
          <h2>Blurb</h2>
          <p>Use this 65-word description of Bookshare where applicable.</p>
          <a class="btn" href="https://www.bookshare.org/media-kit" target="_blank" rel="noopener noreferrer">Download Blurb (.docx)</a>
        </div>

        <div class="resource-block">
          <h2>Promo Video</h2>
          <p>Include this link for Bookshare's 60 second promo video.</p>
          <a class="btn" href="https://www.bookshare.org/media-kit" target="_blank" rel="noopener noreferrer">View Video (YouTube)</a>
        </div>

        <div class="resource-block">
          <h2>Newsletter Content</h2>
          <p>Short copy you can include in newsletters.</p>
          <a class="btn" href="https://www.bookshare.org/wp-content/uploads/2024/03/bookshare_newsletter_content_2024.docx" target="_blank" rel="noopener noreferrer"
            >Download Newsletter Content (.docx)</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.media-kit-page {
  background: radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 46%),
    linear-gradient(135deg, #0f3c90 0%, #0a2f7d 60%, #0b2a70 100%);
  min-height: 210px;
  display: flex;
  align-items: center;
}

.media-kit-page__inner {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

h1 {
  margin: 0;
  color: #ffffff;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 800;
}

@media (max-width: 768px) {
  .media-kit-page {
    min-height: 170px;
  }

  .media-kit-page__inner {
    padding: 0 20px;
  }

  h1 {
    font-size: 42px;
  }
}

.media-content {
  background: #fff;
  padding: 52px 0 10px;
}

.media-content__inner {
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 40px;
}

.intro {
  margin: 0 0 36px;
  max-width: 980px;
  color: #0f172a;
  font-size: 18px;
  line-height: 1.55;
}

.resource-block {
  margin-bottom: 40px;
}

.resource-block h2 {
  margin: 0 0 12px;
  color: #0f172a;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;
}

.resource-block p {
  margin: 0 0 18px;
  color: #0f172a;
  font-size: 16px;
}

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  background: #0b3c90;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .media-content {
    padding-top: 34px;
  }

  .media-content__inner {
    padding: 0 20px;
  }

  .intro {
    font-size: 16px;
  }

  .resource-block h2 {
    font-size: 44px;
  }
}
</style>
