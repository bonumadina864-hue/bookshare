<template>
  <div>
    <section class="who-hero">
      <div class="who-hero__inner">
        <h1>Who we are</h1>
      </div>
    </section>

    <section class="who-content">
      <div class="who-content__inner">
        <p>
          People with reading barriers face numerous challenges. According to the World Health Organization, an estimated
          285 million people worldwide are visually impaired, 90% of whom live in developing countries. An even higher
          number of people have dyslexia or a language-based learning disability that makes it difficult or impossible to
          read printed text. UNESCO has reported that if all students in low income countries left school with basic reading
          skills, 171 million people could be lifted out of poverty, equivalent to a 12% cut in world poverty.
        </p>

        <h2>Our mission</h2>

        <p>
          Bookshare empowers people who cannot read traditional books to pursue education, employment, and social
          participation by making reading and learning materials accessible.
        </p>

        <p>
          Bookshare is the world's largest collection of accessible ebooks. Members can access over 1.4 million titles and
          read in ways that work for them with easy-to-read, accessible formats. The collection includes books for school,
          career, and reading pleasure, as well as titles in over 40 languages. The collection is supported by partnerships
          with over 1,000 US and international publishers and a dedicated volunteer community.
        </p>

        <p>
          Bookshare operates in the U.S. under a copyright exemption - the Chafee Amendment - which grants nonprofit
          organizations the ability to make books available to people with print disabilities without publisher permission.
          Bookshare receives publisher permission to provide books to members outside the US.
        </p>

        <p>
          Thanks to funding from the US Department of Education, Office of Special Education Programs (OSEP), Bookshare is
          free for all qualified US students and schools. Bookshare's current funding award from the Department of Education
          is also referred to as the DREAM (Delivering Revolutionary Equitable and Accessible Materials) Center. Qualified
          individuals who are not students pay a nominal annual fee for their membership, including reduced fees in some
          countries outside the US.
          <a href="#">Learn about membership fees.</a>
        </p>

        <p>
          Bookshare is an initiative of
          <a href="#">Benetech</a>
          , a registered 501(c)(3) nonprofit, nonpartisan organization (Tax ID: 77-0555413) that empowers communities with
          software for social good.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.who-hero {
  background: radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 46%),
    linear-gradient(135deg, #0f3c90 0%, #0a2f7d 60%, #0b2a70 100%);
  min-height: 210px;
  display: flex;
  align-items: center;
}

.who-hero__inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

h1 {
  color: #ffffff;
  font-size: 58px;
  line-height: 1.05;
  font-weight: 800;
  margin: 0;
}

.who-content {
  background: #ffffff;
  padding: 64px 0 72px;
}

.who-content__inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 44px;
}

.who-content p {
  color: #1f2937;
  font-size: 16px;
  line-height: 1.62;
  margin: 0 0 42px;
}

.who-content h2 {
  color: #0c2c66;
  font-size: 58px;
  line-height: 1.1;
  font-weight: 800;
  margin: 0 0 40px;
}

.who-content a {
  color: #2563eb;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .who-hero {
    min-height: 170px;
  }

  .who-hero__inner {
    padding: 0 20px;
  }

  h1 {
    font-size: 42px;
  }

  .who-content {
    padding: 42px 0 50px;
  }

  .who-content__inner {
    padding: 0 20px;
  }

  .who-content p {
    font-size: 16px;
    margin-bottom: 28px;
  }

  .who-content h2 {
    font-size: 42px;
    margin-bottom: 28px;
  }
}
</style>
