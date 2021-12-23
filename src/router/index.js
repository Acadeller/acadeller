import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoursesView from "../views/CoursesView.vue";
import LessonsView from "../views/LessonsView.vue";
import TagsView from "../views/TagsView.vue";
import AboutView from "../views/AboutView.vue";
import ErrorView from "../views/ErrorView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/lecciones",
    name: "Lessons",
    component: LessonsView,
  },
  {
    path: "/cursos",
    name: "Courses",
    component: CoursesView,
  },
  {
    path: "/etiquetas",
    name: "Tags",
    component: TagsView,
  },
  {
    path: "/acerca",
    name: "about",
    component: AboutView,
  },
  {
    path: "/404",
    name: "Error",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
