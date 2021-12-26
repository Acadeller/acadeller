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
    meta: {
      title: "Inicio"
    }
  },
  {
    path: "/lecciones",
    name: "Lessons",
    component: LessonsView,
    meta: {
      title: "Lecciones"
    }
  },
  {
    path: "/cursos",
    name: "Courses",
    component: CoursesView,
    meta: {
      title: "Cursos"
    }
  },
  {
    path: "/etiquetas",
    name: "Tags",
    component: TagsView,
    meta: {
      title: "Etiquetas"
    }
  },
  {
    path: "/acerca",
    name: "about",
    component: AboutView,
    meta: {
      title: "Acerca De"
    }
  },
  {
    path: "/404",
    name: "Error",
    component: ErrorView,
    meta: {
      title: "Error"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Acadeller`
  next()
})

export default router;
