import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import Lessons from "../views/Lessons.vue";
import Tags from "../views/Tags.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lecciones",
    name: "Lessons",
    component: Lessons,
  },
  {
    path: "/cursos",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/etiquetas",
    name: "Tags",
    component: Tags,
  },
  {
    path: "/acerca",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
