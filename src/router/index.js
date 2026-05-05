import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BookshareLibraryPage from "../pages/BookshareLibraryPage.vue";
import BookshareReaderPage from "../pages/BookshareReaderPage.vue";
import ExploreLibraryPage from "../pages/ExploreLibraryPage.vue";
import LearnMorePage from "../pages/LearnMorePage.vue";
import LearnForPage from "../pages/LearnForPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import Login2Page from "../pages/Login2Page.vue";
import SignupPage from "../pages/SignupPage.vue";
import ForgetPage from "../pages/ForgetPage.vue";
import HigherEducationStudentsPage from "../pages/HigherEducationStudentsPage.vue";
import GlobalPage from "../pages/GlobalPage.vue";
import EducatorsAndSchoolsPage from "../pages/EducatorsAndSchoolsPage.vue";
import AdultsPage from "../pages/AdultsPage.vue";
import WhoWeArePage from "../pages/WhoWeArePage.vue";
import EventsPage from "../pages/EventsPage.vue";
import MediaKitPage from "../pages/MediaKitPage.vue";
import DonatePage from "../pages/DonatePage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/bookshare-library", name: "bookshare-library", component: BookshareLibraryPage },
  { path: "/bookshare-reader", name: "bookshare-reader", component: BookshareReaderPage },
  { path: "/explore-library", name: "explore-library", component: ExploreLibraryPage },
  { path: "/learn-more", name: "learn-more", component: LearnMorePage },
  { path: "/learn-for", name: "learn-for", component: LearnForPage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/login2", name: "login2", component: Login2Page },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/forget", name: "forget", component: ForgetPage },
  { path: "/higher-education-students", name: "higher-education-students", component: HigherEducationStudentsPage },
  { path: "/educators-and-schools", name: "educators-and-schools", component: EducatorsAndSchoolsPage },
  { path: "/adults", name: "adults", component: AdultsPage },
  { path: "/global", name: "global", component: GlobalPage },
  { path: "/who-we-are", name: "who-we-are", component: WhoWeArePage },
  { path: "/events", name: "events", component: EventsPage },
  { path: "/media-kit", name: "media-kit", component: MediaKitPage },
  { path: "/donate", name: "donate", component: DonatePage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth", top: 80 };
    }
    return { top: 0 };
  },
});
