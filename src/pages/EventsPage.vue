<template>
  <div>
    <section class="events-hero">
      <div class="events-hero__inner">
        <h1>Events</h1>
      </div>
    </section>

    <section class="events-page">
      <div class="events-page__inner">
        <div class="events-top">
          <p class="results-title">6 results</p>
          <form class="search-box" @submit.prevent>
            <input type="search" placeholder="Search events" aria-label="Search events" />
            <button type="submit" aria-label="Search">
              <span>🔍</span>
            </button>
          </form>
        </div>

        <ul class="events-list">
          <li class="event-item">
            <div class="event-item__row">
              <p class="event-title">Jan 29 - 31: ATIA Annual Conference 2026</p>
              <p>January 16, 2026</p>
            </div>
          </li>
          <li class="event-item">
            <div class="event-item__row">
              <p class="event-title">Mar 9 - 13: CSUN Assistive Technology Conference 2026</p>
              <p>January 16, 2026</p>
            </div>
          </li>
          <li class="event-item">
            <div class="event-item__row">
              <p class="event-title">Nov 20: Accessing Higher Ground Conference 2025</p>
              <p>October 16, 2025</p>
            </div>
          </li>
          <li class="event-item">
            <div class="event-item__row">
              <p class="event-title">Oct 21-23: Closing The Gap Conference 2025</p>
              <p>October 8, 2025</p>
            </div>
          </li>
          <li class="event-item">
            <div class="event-item__row">
              <p class="event-title">On Demand: Increase Equity in your Classroom with Bookshare and UDL</p>
              <p>October 4, 2024</p>
            </div>
          </li>
          <li class="event-item">
            <div class="event-item__row">
              <p class="event-title">On Demand: Free Learning Tool for Struggling Readers</p>
              <p>March 12, 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.events-hero {
  background: #e7ebf3;
  min-height: 200px;
  display: flex;
  align-items: center;
}

.events-hero__inner {
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
  font-weight: 800;
}

.events-page {
  background: #fff;
  padding: 34px 0 72px;
}

.events-page__inner {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

.events-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 14px;
}

.results-title {
  margin: 0;
  font-size: 52px;
  line-height: 1.1;
  color: #0f172a;
  font-weight: 600;
}

.search-box {
  display: flex;
  align-items: stretch;
  border: 1px solid #0c2c66;
  border-radius: 14px;
  overflow: hidden;
  height: 54px;
  min-width: 280px;
}

.search-box input {
  border: 0;
  outline: none;
  padding: 0 16px;
  font-size: 18px;
  color: #334155;
  width: 100%;
}

.search-box button {
  border: 0;
  width: 56px;
  background: #0b4bb3;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
}

.events-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.event-item {
  border-bottom: 1px solid #94a3b8;
  padding: 20px 0 18px;
}

.event-item__row {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;
}

.event-title {
  margin: 0;
  color: #0f172a;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  max-width: 920px;
}

.event-item p {
  margin: 0;
  color: #334155;
  font-size: 16px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .events-hero {
    min-height: 150px;
  }

  .events-hero__inner {
    padding: 0 20px;
  }

  h1 {
    font-size: 46px;
  }

  .events-page {
    padding: 24px 0 44px;
  }

  .events-page__inner {
    padding: 0 20px;
  }

  .events-top {
    flex-direction: column;
    margin-bottom: 6px;
  }

  .results-title {
    font-size: 40px;
  }

  .search-box {
    min-width: 100%;
  }

  .search-box input {
    font-size: 16px;
  }

  .event-title {
    font-size: 28px;
    max-width: 100%;
  }

  .event-item__row {
    flex-direction: column-reverse;
    gap: 10px;
  }

  .event-item p {
    margin: 0;
    font-size: 16px;
  }
}
</style>
