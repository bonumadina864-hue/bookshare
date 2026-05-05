<template>
  <section class="donate-page">
    <div class="donate-page__inner">
      <h1>Donate</h1>
    </div>
  </section>
</template>

<style scoped>
.donate-page {
  background: #eef3fb;
  min-height: 220px;
  display: flex;
  align-items: center;
}

.donate-page__inner {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

h1 {
  margin: 0;
  color: #0b3c90;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;
}

@media (max-width: 768px) {
  .donate-page {
    min-height: 170px;
  }

  .donate-page__inner {
    padding: 0 20px;
  }

  h1 {
    font-size: 42px;
  }
}
</style>
