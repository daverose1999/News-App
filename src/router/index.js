import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/main",
    component: Home,
    children: [
      {
        path: "/main",
        name: "Main",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/Main.vue"),
      },
      {
        path: "/science",
        name: "Science News",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "science" },
      },
      {
        path: "/tech",
        name: "Tech",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "technology" },
      },
      {
        path: "/sport",
        name: "Sport News",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "sports" },
      },
      {
        path: "/health",
        name: "Health",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "health" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
