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
  { path: "/global", name: "global", component: GlobalPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
