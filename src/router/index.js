import { createRouter, createWebHistory } from "vue-router";
import homepage from "../components/homePage.vue";
import SignUp from "../components/SignUp.vue";
import loginPage from "../components/loginPage.vue";
import AddPage from "../components/AddPage.vue";
import UpdatePage from "../components/UpdatePage.vue";
const routes = [
  {
    path: "/",
    name: "homepage",
    component: homepage,
  },
  {
    path: "/up",
    name: "Signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
  {
    path: "/AddPage",
    name: "AddPage",
    component: AddPage,
  },
  {
    path: "/UpdatePage/:id",
    name: "UpdatePage",
    component: UpdatePage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
