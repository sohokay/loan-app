import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Layout from "@/views/layout";

const routes = [{
  path: "/404",
  component: () => import( /* webpackChunkName: "login" */ "../views/404"),
},
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [{
      path: "index",
      component: () =>
          import( /* webpackChunkName: "home" */ "../views/index"),
      meta: {
        noHeader: true
      },
    },],
  },
  {
    path: "/login",
    component: () => import( /* webpackChunkName: "login" */ "../views/login"),
  },
  {
    path: "/wallet",
    component: Layout,
    children: [{
      path: "",
      component: () =>
          import( /* webpackChunkName: "login" */ "../views/wallet"),
    },],
  },
  {
    path: "/customer",
    component: Layout,
    children: [{
      path: "",
      component: () =>
          import( /* webpackChunkName: "login" */ "../views/customer"),
    },],
  },
  {
    path: "/home",
    component: Layout,
    children: [{
      path: "",
      component: () =>
          import( /* webpackChunkName: "login" */ "../views/home"),
    },],

  },
  {
    path: "/message",
    component: () => import( /* webpackChunkName: "login" */ "../views/message"),
    redirect: '/message/',
    children: [
      {
        path: "",
        component: () => import( /* webpackChunkName: "login" */ "../views/message/message-list"),
      },
      {
        path: ":id",
        component: () => import( /* webpackChunkName: "login" */ "../views/message/message-item"),

      },
    ],

  },
  // {path: '/*', redirect: '/404'}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
