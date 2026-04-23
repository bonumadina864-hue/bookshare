import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BookshareLibraryPage from "../pages/BookshareLibraryPage.vue";
import BookshareReaderPage from "../pages/BookshareReaderPage.vue";
import LearnMorePage from "../pages/LearnMorePage.vue";
import LearnForPage from "../pages/LearnForPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import Login2Page from "../pages/Login2Page.vue";
import SignupPage from "../pages/SignupPage.vue";
import ForgetPage from "../pages/ForgetPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/bookshare-library", name: "bookshare-library", component: BookshareLibraryPage },
  { path: "/bookshare-reader", name: "bookshare-reader", component: BookshareReaderPage },
  { path: "/learn-more", name: "learn-more", component: LearnMorePage },
  { path: "/learn-for", name: "learn-for", component: LearnForPage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/login2", name: "login2", component: Login2Page },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/forget", name: "forget", component: ForgetPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
